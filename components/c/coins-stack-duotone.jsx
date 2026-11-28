import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/thvgc93ya.css';
import '../../css/t/tanes6b_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary thvgc93ya"/><path class="primary tanes6b_b"/></g>`,
		"fallback": "iconaut:coins-stack-duotone",
	});
}

export default Component;
