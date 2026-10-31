import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/i/i7wogzf5x.css';
import '../../css/f/f009kbbbu.css';
import '../../css/z/zu-140b4p.css';
import '../../css/u/ug9u30k-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGLlGJucVf" x1="0" x2="0" y1="1.37" y2="22.51" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGCymf1cxZ" x1="1.55" x2="22.46" y1="1.37" y2="22.51" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGLlGJucVf)" stroke="url(#SVGCymf1cxZ)" class="i7wogzf5x wm-k"/><path stroke="url(#SVGCymf1cxZ)" class="f009kbbbu wm-s"/><path class="wm-shine zu-140b4p"/><path class="ug9u30k-b wm-shine"/></g>`,
		"fallback": "withicons-lunar:cloud-cog",
	});
}

export default Component;
