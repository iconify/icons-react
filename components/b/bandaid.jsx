import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q_a3s2bgb.css';
import '../../css/b/bkocpyb2s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q_a3s2bgb"/><path class="bkocpyb2s"/></g>`,
		"fallback": "bi:bandaid",
	});
}

export default Component;
