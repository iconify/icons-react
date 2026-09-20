import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xy8_ucbyz.css';
import '../../css/z/z6z8c6bmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xy8_ucbyz"/><path class="z6z8c6bmd"/></g>`,
		"fallback": "solar:backspace-bold-duotone",
	});
}

export default Component;
