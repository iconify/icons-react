import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsu_4ovau.css';
import '../../css/k/kbffqqeed.css';
import '../../css/f/f4ryxuygv.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGgH6Nebnv" class="lsu_4ovau"/></defs><path class="kbffqqeed"/><path class="f4ryxuygv"/><g class="ij2x_72vy"><use href="#SVGgH6Nebnv"/><use href="#SVGgH6Nebnv"/></g>`,
		"fallback": "openmoji:bookmark",
	});
}

export default Component;
