import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qcobzk14s.css';
import '../../css/h/h_48ptbmm.css';
import '../../css/p/p_92jtypv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qcobzk14s"/><path class="h_48ptbmm"/><path class="p_92jtypv"/></g>`,
		"fallback": "andrsrxn:earbuds-x",
	});
}

export default Component;
