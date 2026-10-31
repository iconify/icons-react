import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/r/rgkw34npa.css';
import '../../css/u/u14of9vtu.css';
import '../../css/v/v-fe6ph8q.css';
import '../../css/r/rx2n50bzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGLZknhxwA" x1="1.5" x2="22.5" y1="2.5" y2="21.13" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGLZknhxwA)" class="rgkw34npa wm-k"/><path fill="url(#SVGLZknhxwA)" class="u14of9vtu wm-a"/><path class="v-fe6ph8q wm-shine"/><path class="rx2n50bzb wm-shine"/></g>`,
		"fallback": "withicons-lunar:butterfly",
	});
}

export default Component;
