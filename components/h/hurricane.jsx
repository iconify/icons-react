import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_gvr0qej.css';
import '../../css/w/wibc5pc_z.css';
import '../../css/t/tighuwovv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b_gvr0qej"/><path class="wibc5pc_z"/><circle class="tighuwovv"/></g>`,
		"fallback": "andrsrxn:hurricane",
	});
}

export default Component;
