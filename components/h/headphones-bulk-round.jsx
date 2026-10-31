import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ub5v1ibuf.css';
import '../../css/o/onffe2clz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ub5v1ibuf"/><path class="onffe2clz"/></g>`,
		"fallback": "coolicons:headphones-bulk-round",
	});
}

export default Component;
