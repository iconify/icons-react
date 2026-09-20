import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umtc5tvss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umtc5tvss"/>`,
		"fallback": "mdi:bullseye",
	});
}

export default Component;
