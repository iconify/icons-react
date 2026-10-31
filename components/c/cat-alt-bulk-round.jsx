import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lzbnldvse.css';
import '../../css/e/e_n7rl6qx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lzbnldvse"/><path class="e_n7rl6qx"/></g>`,
		"fallback": "coolicons:cat-alt-bulk-round",
	});
}

export default Component;
