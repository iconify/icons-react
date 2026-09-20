import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez_6ovbaq.css';
import '../../css/h/hrzob008l.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGaTGCleZN" class="ez_6ovbaq"/></defs><use href="#SVGaTGCleZN" class="hrzob008l"/><use href="#SVGaTGCleZN" class="ij2x_72vy"/>`,
		"fallback": "openmoji:chopsticks",
	});
}

export default Component;
