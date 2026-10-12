import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hceq6e3ar.css';
import '../../css/d/dh9p7jqrn.css';
import '../../css/h/hjyobvb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hceq6e3ar"/><path class="dh9p7jqrn"/><path class="hjyobvb_j"/></g>`,
		"fallback": "andrsrxn:book",
	});
}

export default Component;
