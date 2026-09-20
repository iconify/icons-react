import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/loerapbvw.css';
import '../../css/a/anvpeybgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="loerapbvw"/><path clip-rule="evenodd" class="anvpeybgw"/></g>`,
		"fallback": "solar:exit-outline",
	});
}

export default Component;
