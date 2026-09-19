import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d1w6dxbqr.css';
import '../../css/k/k13a2knlr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d1w6dxbqr"/><path class="k13a2knlr"/></g>`,
		"fallback": "bi:envelope-dash-fill",
	});
}

export default Component;
