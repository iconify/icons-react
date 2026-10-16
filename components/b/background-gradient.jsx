import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h4p5v0c0l.css';
import '../../css/k/k8jrf-bba.css';
import '../../css/h/h_d-05drd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h4p5v0c0l"/><rect transform="rotate(90 0 21.24)scale(-1 1)" class="k8jrf-bba"/><path class="h_d-05drd"/></g>`,
		"fallback": "andrsrxn:background-gradient",
	});
}

export default Component;
