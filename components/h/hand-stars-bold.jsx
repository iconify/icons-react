import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vn9m1j_jt.css';
import '../../css/q/qg2qrmbrg.css';
import '../../css/n/np3qu_b3h.css';
import '../../css/v/v-hllac-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vn9m1j_jt"/><path class="qg2qrmbrg"/><path class="np3qu_b3h"/><path class="v-hllac-d"/></g>`,
		"fallback": "solar:hand-stars-bold",
	});
}

export default Component;
