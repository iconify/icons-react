import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/znqnkfbzn.css';
import '../../css/z/ze7_q5syt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="znqnkfbzn"/><path class="ze7_q5syt"/></g>`,
		"fallback": "reicon:dialog2",
	});
}

export default Component;
