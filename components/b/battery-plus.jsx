import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t9iy3ybyf.css';
import '../../css/a/a24rdcbis.css';
import '../../css/q/qgzo5yb_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="t9iy3ybyf"/><rect class="a24rdcbis"/><path class="qgzo5yb_z"/></g>`,
		"fallback": "andrsrxn:battery-plus",
	});
}

export default Component;
