import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ll_o5ll0y.css';
import '../../css/v/v48m3_bsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ll_o5ll0y"/><path class="v48m3_bsm"/></g>`,
		"fallback": "solar:copy-bold-duotone",
	});
}

export default Component;
