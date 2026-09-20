import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uptpc930r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uptpc930r"/>`,
		"fallback": "mdi:chevron-down-box-outline",
	});
}

export default Component;
