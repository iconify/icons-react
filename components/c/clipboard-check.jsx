import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/z/ziq1p1k4e.css';
import '../../css/h/h4v6jl07u.css';
import '../../css/x/x5ii074yc.css';
import '../../css/b/bqnxqibdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGkyoFDcfN" x1="3.51" x2="20.5" y1="1.5" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path class="wm-k ziq1p1k4e"/><path fill="url(#SVGkyoFDcfN)" class="h4v6jl07u wm-a"/><path class="wm-shine x5ii074yc"/><path class="bqnxqibdx wm-shine"/></g>`,
		"fallback": "withicons-lunar:clipboard-check",
	});
}

export default Component;
