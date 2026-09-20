import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf44i88ei.css';
import '../../css/c/ch9d9pbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf44i88ei"/><path class="ch9d9pbmr"/></g>`,
		"fallback": "solar:forbidden-bold-duotone",
	});
}

export default Component;
