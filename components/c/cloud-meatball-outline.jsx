import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji5cev1ps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji5cev1ps"/>`,
		"fallback": "flowbite:cloud-meatball-outline",
	});
}

export default Component;
