import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zmx7zv9mo.css';
import '../../css/d/dq4g_8bac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zmx7zv9mo"/><path class="dq4g_8bac"/></g>`,
		"fallback": "reicon:bag-check-duotone",
	});
}

export default Component;
