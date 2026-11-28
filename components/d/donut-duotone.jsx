import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pp1byebsr.css';
import '../../css/h/h-i2pwbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pp1byebsr secondary"/><path class="h-i2pwbof primary"/></g>`,
		"fallback": "iconaut:donut-duotone",
	});
}

export default Component;
