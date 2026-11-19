import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7cew6b7g.css';
import '../../css/d/dtgir6b5j.css';
import '../../css/p/p6lux86jr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="h7cew6b7g"/><path class="dtgir6b5j"/><path class="p6lux86jr"/></g>`,
		"fallback": "andrsrxn:degree-90",
	});
}

export default Component;
