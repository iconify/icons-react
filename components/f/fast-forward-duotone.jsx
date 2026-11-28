import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e_0c7_lwi.css';
import '../../css/u/u2exgnb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e_0c7_lwi secondary"/><path class="primary u2exgnb9n"/></g>`,
		"fallback": "iconaut:fast-forward-duotone",
	});
}

export default Component;
