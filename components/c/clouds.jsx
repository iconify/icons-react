import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g_q-t-yun.css';
import '../../css/c/ctdbzfrld.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g_q-t-yun"/><path class="ctdbzfrld"/></g>`,
		"fallback": "bi:clouds",
	});
}

export default Component;
