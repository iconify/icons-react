import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jz28tybvv.css';
import '../../css/q/qpoe75l5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jz28tybvv"/><path class="qpoe75l5y"/></g>`,
		"fallback": "keyline-icons:dice-6-horizontal-duotone",
	});
}

export default Component;
