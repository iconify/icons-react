import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/x/xtfy_0l4u.css';
import '../../css/m/m83lzh_7m.css';
import '../../css/u/uy7uqmdkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG049HVcPt" x1="2.5" x2="21.5" y1="1.51" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVG049HVcPt)" class="wm-k xtfy_0l4u"/><path fill="url(#SVG049HVcPt)" class="m83lzh_7m wm-a"/><path class="uy7uqmdkf wm-shine"/></g>`,
		"fallback": "withicons-lunar:chart-candlestick",
	});
}

export default Component;
