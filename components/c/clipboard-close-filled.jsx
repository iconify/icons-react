import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xkcbf1byo.css';
import '../../css/m/mxqjx3b4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xkcbf1byo"/><path class="mxqjx3b4b"/></g>`,
		"fallback": "reicon:clipboard-close-filled",
	});
}

export default Component;
