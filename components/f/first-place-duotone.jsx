import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hwbjm-bdm.css';
import '../../css/x/xk8o6wbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hwbjm-bdm secondary"/><path class="primary xk8o6wbxx"/></g>`,
		"fallback": "iconaut:first-place-duotone",
	});
}

export default Component;
