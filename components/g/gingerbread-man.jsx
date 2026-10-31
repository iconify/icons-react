import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/w/w1ivnbbhw.css';
import '../../css/r/rniik6bfb.css';
import '../../css/l/l6vf3ordk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGR1QUFcix" x1="0" x2="0" y1="1.02" y2="22.74" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGHtWAEcgQ" x1="2.51" x2="21.49" y1="1.02" y2="22.74" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGR1QUFcix)" stroke="url(#SVGHtWAEcgQ)" class="w1ivnbbhw wm-k"/><path class="rniik6bfb wm-shine"/><path class="l6vf3ordk wm-shine"/></g>`,
		"fallback": "withicons-lunar:gingerbread-man",
	});
}

export default Component;
