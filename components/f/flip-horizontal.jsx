import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/g/gc3p0ddeq.css';
import '../../css/i/i707pbvbc.css';
import '../../css/m/mnygavb_q.css';
import '../../css/r/r1i7u389j.css';
import '../../css/f/ff3ygqonb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGeiVzvbRt" x1="0" x2="0" y1="2" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGHxysHcEy" x1="1.5" x2="22.5" y1="2" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGeiVzvbRt)" stroke="url(#SVGHxysHcEy)" class="gc3p0ddeq wm-k"/><path fill="url(#SVGHxysHcEy)" class="i707pbvbc wm-a"/><path stroke="url(#SVGHxysHcEy)" class="mnygavb_q wm-s"/><path class="r1i7u389j wm-shine"/><path class="ff3ygqonb wm-shine"/></g>`,
		"fallback": "withicons-lunar:flip-horizontal",
	});
}

export default Component;
