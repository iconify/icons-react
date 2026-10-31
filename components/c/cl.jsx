import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/epjhfwbro.css';
import '../../css/h/h8h_gsbvo.css';
import '../../css/b/bvnxnbndp.css';
import '../../css/n/n-22qcczj.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="epjhfwbro"/><path class="h8h_gsbvo"/><path class="bvnxnbndp"/><path class="n-22qcczj"/></g>`,
		"fallback": "cif:cl",
	});
}

export default Component;
