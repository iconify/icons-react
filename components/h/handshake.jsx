import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/x/xqjsdtb7t.css';
import '../../css/u/ulfr6eblk.css';
import '../../css/n/nybbsdb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG3LPbUcAa" x1="0" x2="0" y1="6" y2="20.44" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVG4234dccE" x1="1.01" x2="23" y1="6" y2="20.44" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG3LPbUcAa)" stroke="url(#SVG4234dccE)" class="wm-k xqjsdtb7t"/><path class="ulfr6eblk wm-shine"/><path class="nybbsdb1b wm-shine"/></g>`,
		"fallback": "withicons-lunar:handshake",
	});
}

export default Component;
