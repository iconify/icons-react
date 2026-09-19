import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fdv_t3ltl.css';
import '../../css/v/v18c9fbau.css';
import '../../css/b/ba-qp9bir.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fdv_t3ltl"/><path class="v18c9fbau"/><path class="ba-qp9bir"/></g>`,
		"fallback": "flag:bw-4x3",
	});
}

export default Component;
