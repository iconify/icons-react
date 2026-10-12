import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1gbw5rxy.css';
import '../../css/e/e_k6al6gs.css';
import '../../css/m/mc3p6_0qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l1gbw5rxy"/><path class="e_k6al6gs"/><path class="mc3p6_0qk"/></g>`,
		"fallback": "andrsrxn:cloud-rain-wind",
	});
}

export default Component;
