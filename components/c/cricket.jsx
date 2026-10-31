import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/d/ddvpsqk1r.css';
import '../../css/z/zr43-nbqe.css';
import '../../css/q/qfyt4ubzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGpug3AFun" x1="1.92" x2="21.63" y1="2.29" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGpug3AFun)" class="ddvpsqk1r wm-k"/><path class="wm-a zr43-nbqe"/><path class="qfyt4ubzv wm-shine"/></g>`,
		"fallback": "withicons-lunar:cricket",
	});
}

export default Component;
