import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/w/wshxhibhz.css';
import '../../css/y/yf9hs8pwd.css';
import '../../css/h/hh0vjxd6k.css';
import '../../css/d/dl_oqacfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGex2APbjU" x1="1.51" x2="22.25" y1="1.75" y2="22.48" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGex2APbjU)" class="wm-k wshxhibhz"/><path fill="url(#SVGex2APbjU)" class="wm-a yf9hs8pwd"/><path class="hh0vjxd6k wm-shine"/><path class="dl_oqacfr wm-shine"/></g>`,
		"fallback": "withicons-lunar:chart-donut",
	});
}

export default Component;
