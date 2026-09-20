import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wualybb6k.css';
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
		"content": `<defs><path id="SVGu3nwKdfZ" class="wualybb6k"/></defs><g class="kso7adcaj"><circle class="es25eccir"/><use href="#SVGu3nwKdfZ"/></g><g class="ij2x_72vy"><circle class="es25eccir"/><use href="#SVGu3nwKdfZ"/></g>`,
		"fallback": "openmoji:eleven-oclock",
	});
}

export default Component;
