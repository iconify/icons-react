import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/e/etvughb_l.css';
import '../../css/r/r0kpm3boe.css';
import '../../css/y/ymuau-b1r.css';
import '../../css/b/b4l8uabvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWSkRwnLe" x1="2.48" x2="21.26" y1="1.51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGWSkRwnLe)" class="etvughb_l wm-k"/><path fill="url(#SVGWSkRwnLe)" class="r0kpm3boe wm-a"/><path class="wm-shine ymuau-b1r"/><path class="b4l8uabvb wm-shine"/></g>`,
		"fallback": "withicons-lunar:dental-chair",
	});
}

export default Component;
