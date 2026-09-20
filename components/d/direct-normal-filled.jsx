import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j0945kbqi.css';
import '../../css/d/d2elkkbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j0945kbqi"/><path class="d2elkkbgf"/></g>`,
		"fallback": "reicon:direct-normal-filled",
	});
}

export default Component;
