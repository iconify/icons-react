import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o4f271bwc.css';
import '../../css/x/xk386r5up.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o4f271bwc"/><path clip-rule="evenodd" class="xk386r5up"/></g>`,
		"fallback": "reicon:bluetooth-circle-filled",
	});
}

export default Component;
