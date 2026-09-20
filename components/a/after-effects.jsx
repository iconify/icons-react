import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbm5v1bij.css';
import '../../css/v/vd_z2e_fq.css';
import '../../css/n/n_-89i9ig.css';

const viewBox = {"width":83,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGRJNxRbwH)"><path class="qbm5v1bij"/><path class="vd_z2e_fq"/></g><defs><clipPath id="SVGRJNxRbwH"><path class="n_-89i9ig"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:after-effects",
	});
}

export default Component;
