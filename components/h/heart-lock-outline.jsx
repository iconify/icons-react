import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zs6l8u0uh.css';
import '../../css/x/xw4aggbvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zs6l8u0uh"/><path clip-rule="evenodd" class="xw4aggbvp"/></g>`,
		"fallback": "solar:heart-lock-outline",
	});
}

export default Component;
