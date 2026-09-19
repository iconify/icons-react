import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vj69q0bus.css';
import '../../css/l/lb6w94bmd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vj69q0bus"/><path class="lb6w94bmd"/></g>`,
		"fallback": "bi:badge-ad-fill",
	});
}

export default Component;
