import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vvcb88bko.css';
import '../../css/k/k_pc7q7nw.css';
import '../../css/k/k8jrf-bba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vvcb88bko"/><path class="k_pc7q7nw"/><rect transform="rotate(90 0 21.24)scale(-1 1)" class="k8jrf-bba"/></g>`,
		"fallback": "andrsrxn:check-square",
	});
}

export default Component;
