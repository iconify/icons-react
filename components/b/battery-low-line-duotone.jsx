import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ovw1pubnt.css';
import '../../css/d/d_xp_lbcm.css';
import '../../css/q/q7kvgacmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ovw1pubnt"/><path class="d_xp_lbcm"/><path class="q7kvgacmn"/></g>`,
		"fallback": "solar:battery-low-line-duotone",
	});
}

export default Component;
