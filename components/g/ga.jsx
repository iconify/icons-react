import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yrncfdc7x.css';
import '../../css/k/kowma_bmi.css';
import '../../css/t/t5lqdhfmd.css';

const viewBox = {"width":301,"height":225};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yrncfdc7x"/><path class="kowma_bmi"/><path class="t5lqdhfmd"/></g>`,
		"fallback": "cif:ga",
	});
}

export default Component;
