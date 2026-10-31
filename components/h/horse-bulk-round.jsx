import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q5q9047zq.css';
import '../../css/r/r8t5m4syu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q5q9047zq"/><path class="r8t5m4syu"/></g>`,
		"fallback": "coolicons:horse-bulk-round",
	});
}

export default Component;
