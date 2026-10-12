import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfqgbtbno.css';
import '../../css/f/f2-fiaccp.css';
import '../../css/h/h9bmykb9r.css';
import '../../css/i/ieuexu7ao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="yfqgbtbno"/><path class="f2-fiaccp"/><path class="h9bmykb9r"/><path class="ieuexu7ao"/></g>`,
		"fallback": "andrsrxn:history",
	});
}

export default Component;
