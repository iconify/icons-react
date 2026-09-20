import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byuc_xk6t.css';
import '../../css/v/vre8rpb7n.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/x/x59ungbhn.css';
import '../../css/z/zh0edfbzg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byuc_xk6t"/><path class="vre8rpb7n"/><g class="ij2x_72vy"><path class="x59ungbhn"/><path class="zh0edfbzg"/></g>`,
		"fallback": "openmoji:cable",
	});
}

export default Component;
