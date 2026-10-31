import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/j/j38z_1b7f.css';
import '../../css/d/d96lq7z_v.css';
import '../../css/j/j102kjb8w.css';
import '../../css/c/c7sb-pkpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGzXJHJL6V" x1="0" x2="0" y1=".5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGWyx2RcLy" x1=".5" x2="22.45" y1=".5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGzXJHJL6V)" stroke="url(#SVGWyx2RcLy)" class="j38z_1b7f wm-k"/><path fill="url(#SVGWyx2RcLy)" class="d96lq7z_v wm-a"/><path class="j102kjb8w wm-shine"/><path class="c7sb-pkpa wm-shine"/></g>`,
		"fallback": "withicons-lunar:cloud-sun",
	});
}

export default Component;
