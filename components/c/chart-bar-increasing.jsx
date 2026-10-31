import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/v/v_gb3rbse.css';
import '../../css/b/bux2xhb5o.css';
import '../../css/v/v5iqxib3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGmWDhaecI" x1="2.5" x2="21.99" y1="2.01" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGmWDhaecI)" class="v_gb3rbse wm-k"/><path fill="url(#SVGmWDhaecI)" class="bux2xhb5o wm-a"/><path class="v5iqxib3g wm-shine"/></g>`,
		"fallback": "withicons-lunar:chart-bar-increasing",
	});
}

export default Component;
