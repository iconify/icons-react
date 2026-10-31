import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/u/uoj0-ubvf.css';
import '../../css/a/anzxowv_e.css';
import '../../css/j/jm0enurkc.css';
import '../../css/k/khzz1tbjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGsrzDseMk" x1="0" x2="0" y1="5.5" y2="18.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGpEqgQbKf" x1="1.5" x2="22.5" y1="5.5" y2="18.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGsrzDseMk)" stroke="url(#SVGpEqgQbKf)" class="uoj0-ubvf wm-k"/><path fill="url(#SVGpEqgQbKf)" class="anzxowv_e wm-a"/><path class="jm0enurkc wm-shine"/><path class="khzz1tbjk wm-shine"/></g>`,
		"fallback": "withicons-lunar:api",
	});
}

export default Component;
