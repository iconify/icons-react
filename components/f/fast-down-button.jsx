import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij2x_72vy.css';
import '../../css/f/fcz2jhy5n.css';
import '../../css/u/uljyx7ljt.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ij2x_72vy"><path class="fcz2jhy5n"/><path class="uljyx7ljt"/></g>`,
		"fallback": "openmoji:fast-down-button",
	});
}

export default Component;
