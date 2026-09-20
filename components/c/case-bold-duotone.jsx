import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/q/qlhqa5a1y.css';
import '../../css/x/xhzturs6n.css';
import '../../css/u/ub62qzant.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="qlhqa5a1y"/><path class="xhzturs6n"/></g><path clip-rule="evenodd" class="ub62qzant"/></g>`,
		"fallback": "solar:case-bold-duotone",
	});
}

export default Component;
