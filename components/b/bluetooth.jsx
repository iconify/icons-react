import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oyqwxmb_k.css';
import '../../css/p/p1p-8k1wo.css';
import '../../css/f/flzhs4_8b.css';
import '../../css/e/e6eltqxhi.css';
import '../../css/c/cte2d2bzt.css';
import '../../css/u/u2vvuvb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="oyqwxmb_k wm-shadow"/><path class="p1p-8k1wo"/><path class="flzhs4_8b"/><path class="e6eltqxhi"/><path class="cte2d2bzt"/><path class="u2vvuvb6s"/></g>`,
		"fallback": "withicons-retro:bluetooth",
	});
}

export default Component;
