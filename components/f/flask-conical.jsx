import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/j/j9uwdxb4n.css';
import '../../css/b/b_94nebwh.css';
import '../../css/d/d1b0mubcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGK8MA1d2I" x1="2.94" x2="21.06" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGK8MA1d2I)" class="j9uwdxb4n wm-k"/><path class="b_94nebwh wm-shine"/><path class="d1b0mubcc wm-shine"/></g>`,
		"fallback": "withicons-lunar:flask-conical",
	});
}

export default Component;
