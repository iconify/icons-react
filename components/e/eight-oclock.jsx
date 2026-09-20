import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhzzm5e1n.css';
import '../../css/k/kso7adcaj.css';
import '../../css/e/es25eccir.css';
import '../../css/i/ij2x_72vy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGd5k7tciQ" class="jhzzm5e1n"/></defs><g class="kso7adcaj"><circle class="es25eccir"/><use href="#SVGd5k7tciQ"/></g><g class="ij2x_72vy"><circle class="es25eccir"/><use href="#SVGd5k7tciQ"/></g>`,
		"fallback": "openmoji:eight-oclock",
	});
}

export default Component;
