import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l8j7uhbgb.css';
import '../../css/u/uoskdrb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l8j7uhbgb"/><path clip-rule="evenodd" class="uoskdrb1p"/></g>`,
		"fallback": "healthicons:hospital-symbol-outline-24px",
	});
}

export default Component;
