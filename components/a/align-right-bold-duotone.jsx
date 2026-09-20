import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jtvoacbin.css';
import '../../css/j/jpwd-g6un.css';
import '../../css/x/x5xkvt-yb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jtvoacbin"/><path class="jpwd-g6un"/><path clip-rule="evenodd" class="x5xkvt-yb"/></g>`,
		"fallback": "solar:align-right-bold-duotone",
	});
}

export default Component;
