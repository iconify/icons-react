import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y6-b8lbmz.css';
import '../../css/j/j0x7yjd6h.css';
import '../../css/u/un7ztky7q.css';
import '../../css/r/rpzx_aboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y6-b8lbmz"/><path class="j0x7yjd6h"/><path class="un7ztky7q"/><path class="rpzx_aboi"/></g>`,
		"fallback": "solar:expressionless-square-bold-duotone",
	});
}

export default Component;
