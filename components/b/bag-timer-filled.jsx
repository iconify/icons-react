import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/elbxrch6e.css';
import '../../css/u/uy6yb8bal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="elbxrch6e"/><path class="uy6yb8bal"/></g>`,
		"fallback": "reicon:bag-timer-filled",
	});
}

export default Component;
