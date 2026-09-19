import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o7lvjg07z.css';
import '../../css/m/mq_xs_b1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o7lvjg07z"/><path class="mq_xs_b1l"/></g>`,
		"fallback": "gg:chevron-double-down",
	});
}

export default Component;
