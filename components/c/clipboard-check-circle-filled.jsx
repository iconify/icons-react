import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/e/ey2r02nhy.css';
import '../../css/w/wmqr3wb9e.css';
import '../../css/z/zse3axbhn.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGwtrnxdry"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="ey2r02nhy"/><path class="wmqr3wb9e"/><path clip-rule="evenodd" class="zse3axbhn"/></g></mask></defs><circle mask="url(#SVGwtrnxdry)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:clipboard-check-circle-filled",
	});
}

export default Component;
