import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/f/fwju4hc3b.css';
import '../../css/k/kkp367ekw.css';
import '../../css/l/le-jsqbie.css';
import '../../css/g/g_qolfb5m.css';
import '../../css/v/v_cdbsgtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9xba5H3C" x1="0" x2="0" y1="1.02" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGicxaEeTV" x1="1.01" x2="23" y1="1.02" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG9xba5H3C)" stroke="url(#SVGicxaEeTV)" class="fwju4hc3b wm-k"/><path class="kkp367ekw wm-shine"/><path class="le-jsqbie wm-shine"/><path class="g_qolfb5m wm-shine"/><path class="v_cdbsgtu wm-shine"/></g>`,
		"fallback": "withicons-lunar:badge-info",
	});
}

export default Component;
