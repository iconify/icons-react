import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/x/xefabvbpr.css';
import '../../css/h/h8x7nljfk.css';
import '../../css/l/lb_3yxo4a.css';
import '../../css/k/ky_zw6kib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGvoZdweQM" x1="4" x2="14" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".45" class="stui2mbih"/><stop offset="1" class="xefabvbpr"/></linearGradient></defs><path class="h8x7nljfk wm-k"/><path fill="url(#SVGvoZdweQM)" class="lb_3yxo4a wm-shine"/><path class="ky_zw6kib wm-shine"/></g>`,
		"fallback": "withicons-christmas:egg",
	});
}

export default Component;
