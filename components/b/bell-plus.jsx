import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/v/vug5wnm3x.css';
import '../../css/y/yrgksnvpd.css';
import '../../css/v/v595bwbjw.css';
import '../../css/p/pzdhmkkav.css';
import '../../css/m/meqkr-dbi.css';
import '../../css/w/wh_bh8bku.css';
import '../../css/g/g6l12sbeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGu2LUIx3b" x1="3" x2="22.5" y1="1.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGu2LUIx3b)" class="vug5wnm3x wm-k"/><path class="wm-a yrgksnvpd"/><path stroke="url(#SVGu2LUIx3b)" class="v595bwbjw wm-s"/><path class="pzdhmkkav wm-shine"/><path class="meqkr-dbi wm-shine"/><path class="wh_bh8bku wm-shine"/><path class="g6l12sbeo wm-shine"/></g>`,
		"fallback": "withicons-lunar:bell-plus",
	});
}

export default Component;
