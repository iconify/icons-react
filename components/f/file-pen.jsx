import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/n/nd1t5o3bl.css';
import '../../css/j/jsjyksb1f.css';
import '../../css/d/dxa9a_x6i.css';
import '../../css/x/xkg_qzbcr.css';
import '../../css/a/acqb-_7_a.css';
import '../../css/q/qax67xblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGhJdBYbnI" x1="4" x2="23.39" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path class="nd1t5o3bl wm-k"/><path stroke="url(#SVGhJdBYbnI)" class="jsjyksb1f wm-s"/><path class="dxa9a_x6i wm-shine"/><path class="wm-shine xkg_qzbcr"/><path class="acqb-_7_a wm-shine"/><path class="qax67xblw wm-shine"/></g>`,
		"fallback": "withicons-lunar:file-pen",
	});
}

export default Component;
