import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/x/xiir536jv.css';
import '../../css/a/arpurebgs.css';
import '../../css/g/gcgofxbxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGr5HRPbgf" x1="0" x2="0" y1="4.01" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGWP2RtcJD" x1="2.5" x2="21.5" y1="4.01" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGr5HRPbgf)" stroke="url(#SVGWP2RtcJD)" class="wm-k xiir536jv"/><path class="arpurebgs wm-shine"/><path class="gcgofxbxn wm-shine"/></g>`,
		"fallback": "withicons-lunar:arrow-left-to-line",
	});
}

export default Component;
