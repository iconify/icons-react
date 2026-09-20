import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/ja_ybdb3r.css';
import '../../css/j/j7dyzlxlx.css';
import '../../css/r/ryhenzbcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ja_ybdb3r"/><path class="j7dyzlxlx"/><path clip-rule="evenodd" class="ryhenzbcr"/></g>`,
		"fallback": "solar:car-outline",
	});
}

export default Component;
