import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/l/l5gbfbcmm.css';
import '../../css/g/g2nyg8bzc.css';
import '../../css/s/s4exh1eaz.css';
import '../../css/q/qwmoceb6f.css';
import '../../css/w/w5_5g2i3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGKZDiwdQA" x1="0" x2="0" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVG91GnZd1m" x1="2" x2="22" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGKZDiwdQA)" stroke="url(#SVG91GnZd1m)" class="l5gbfbcmm wm-k"/><path stroke="url(#SVG91GnZd1m)" class="g2nyg8bzc wm-s"/><path class="s4exh1eaz wm-shine"/><path class="qwmoceb6f wm-deco"/><path class="w5_5g2i3a wm-deco"/></g>`,
		"fallback": "withicons-lunar:heart-gift",
	});
}

export default Component;
