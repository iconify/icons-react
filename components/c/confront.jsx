import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ki9botvch.css';
import '../../css/y/yy_nqgb_x.css';
import '../../css/x/xt0_rbcbw.css';
import '../../css/y/ykek1hbyz.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ki9botvch"/><path class="yy_nqgb_x"/><path class="xt0_rbcbw"/><path class="ykek1hbyz"/></g>`,
		"fallback": "iwwa:confront",
	});
}

export default Component;
