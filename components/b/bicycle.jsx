import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o__hzkbzo.css';
import '../../css/q/q_rqgsb-b.css';
import '../../css/b/bx496_bxh.css';
import '../../css/j/jyrc9yb1f.css';
import '../../css/h/h-4_1wh1y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o__hzkbzo"/><path clip-rule="evenodd" class="q_rqgsb-b"/><path class="bx496_bxh"/><path clip-rule="evenodd" class="jyrc9yb1f"/><path class="h-4_1wh1y"/></g>`,
		"fallback": "pepicons:bicycle",
	});
}

export default Component;
