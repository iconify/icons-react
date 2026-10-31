import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/u/u24xezl2m.css';
import '../../css/x/xtg4oacjk.css';
import '../../css/v/vzaqq3_nb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGR1771fVt" x1="0" x2="0" y1="1.51" y2="22.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGbPDaUF5b" x1="1.02" x2="22.98" y1="1.51" y2="22.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGR1771fVt)" stroke="url(#SVGbPDaUF5b)" class="u24xezl2m wm-k"/><path class="wm-shine xtg4oacjk"/><path class="vzaqq3_nb wm-shine"/></g>`,
		"fallback": "withicons-lunar:chinese-knot",
	});
}

export default Component;
