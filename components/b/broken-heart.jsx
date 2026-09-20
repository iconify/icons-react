import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd1w7wl8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yd1w7wl8l"/>`,
		"fallback": "lets-icons:broken-heart",
	});
}

export default Component;
