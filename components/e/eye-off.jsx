import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/d/d1t90zxuy.css';
import '../../css/l/l2sj8fbjg.css';
import '../../css/f/fl-j4xy0i.css';
import '../../css/j/jhgvlhboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGxe90GdHL" x1="1.5" x2="22.5" y1="2.01" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGxe90GdHL)" class="d1t90zxuy wm-k"/><path stroke="url(#SVGxe90GdHL)" class="l2sj8fbjg wm-s"/><path class="fl-j4xy0i wm-shine"/><path class="jhgvlhboo wm-shine"/></g>`,
		"fallback": "withicons-lunar:eye-off",
	});
}

export default Component;
