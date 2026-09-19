import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g16jwbb9d.css';
import '../../css/f/fnj3a4rjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g16jwbb9d"/><path class="fnj3a4rjz"/></g>`,
		"fallback": "hugeicons:cloud-little-rain",
	});
}

export default Component;
