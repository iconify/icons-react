import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t3l5e3_rb.css';
import '../../css/p/pz1wa_8gt.css';
import '../../css/o/o3s0g5bnm.css';
import '../../css/q/qboly1b3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t3l5e3_rb"/><path class="pz1wa_8gt"/><path class="o3s0g5bnm"/><path class="qboly1b3q"/></g>`,
		"fallback": "andrsrxn:heart-user",
	});
}

export default Component;
