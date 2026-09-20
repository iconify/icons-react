import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij2x_72vy.css';
import '../../css/a/an3wb-bzz.css';
import '../../css/c/ckusvhbps.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ij2x_72vy"><path class="an3wb-bzz"/><path class="ckusvhbps"/></g>`,
		"fallback": "openmoji:fast-reverse-button",
	});
}

export default Component;
