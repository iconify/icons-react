import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4dck2bfc.css';
import '../../css/a/ae849gbxa.css';
import '../../css/h/he5v-9bus.css';
import '../../css/n/nsjwb6buc.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/i/ikny2et_i.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGVcWTWdtc" class="i4dck2bfc"/></defs><g class="ae849gbxa"><path class="he5v-9bus"/><path class="nsjwb6buc"/></g><g class="ij2x_72vy"><use href="#SVGVcWTWdtc"/><path class="ikny2et_i"/><use href="#SVGVcWTWdtc"/></g>`,
		"fallback": "openmoji:handbag",
	});
}

export default Component;
