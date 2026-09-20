import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wtxdxbctx.css';
import '../../css/x/xx40hbnee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wtxdxbctx"/><path class="xx40hbnee"/></g>`,
		"fallback": "reicon:calendar-add3-filled",
	});
}

export default Component;
