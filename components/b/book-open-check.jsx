import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/b/b_i49_bjl.css';
import '../../css/y/yznhvjbuo.css';
import '../../css/b/bxx7r5bqq.css';
import '../../css/l/lwgpfhb4u.css';
import '../../css/p/pb3f6qbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGUU1kTbFv" x1="2.01" x2="22" y1="3.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGUU1kTbFv)" class="b_i49_bjl wm-k"/><path class="wm-shine yznhvjbuo"/><path class="bxx7r5bqq wm-shine"/><path class="lwgpfhb4u wm-shine"/><path class="pb3f6qbdb wm-shine"/></g>`,
		"fallback": "withicons-lunar:book-open-check",
	});
}

export default Component;
