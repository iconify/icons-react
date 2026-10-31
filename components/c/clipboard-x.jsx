import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/q/q6ea8xbcq.css';
import '../../css/h/h4v6jl07u.css';
import '../../css/t/tbkb_abqz.css';
import '../../css/b/bqnxqibdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGC01uknvf" x1="0" x2="0" y1="1.5" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGkyoFDcfN" x1="3.51" x2="20.5" y1="1.5" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGC01uknvf)" stroke="url(#SVGkyoFDcfN)" class="q6ea8xbcq wm-k"/><path fill="url(#SVGkyoFDcfN)" class="h4v6jl07u wm-a"/><path class="tbkb_abqz wm-shine"/><path class="bqnxqibdx wm-shine"/></g>`,
		"fallback": "withicons-lunar:clipboard-x",
	});
}

export default Component;
