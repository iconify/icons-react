import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_bdeacrp.css';
import '../../css/i/iy3buvdru.css';
import '../../css/m/mxjgg9esa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o_bdeacrp"/><path class="iy3buvdru"/><path class="mxjgg9esa"/></g>`,
		"fallback": "andrsrxn:chart-radar",
	});
}

export default Component;
