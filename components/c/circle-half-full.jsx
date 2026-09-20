import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz4ul3vvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz4ul3vvd"/>`,
		"fallback": "mdi:circle-half-full",
	});
}

export default Component;
