import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl8rzyvoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl8rzyvoh"/>`,
		"fallback": "mdi:golf-cart",
	});
}

export default Component;
