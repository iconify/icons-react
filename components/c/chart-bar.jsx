import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/n/nqp7shuij.css';
import '../../css/g/g8f_vpbbs.css';
import '../../css/b/bifwa-49b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGa9fXhcLe" x1="1.51" x2="22.5" y1="3" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGa9fXhcLe)" class="nqp7shuij wm-k"/><path fill="url(#SVGa9fXhcLe)" class="g8f_vpbbs wm-a"/><path class="bifwa-49b wm-shine"/></g>`,
		"fallback": "withicons-lunar:chart-bar",
	});
}

export default Component;
