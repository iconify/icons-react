import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jn1h1itds.css';
import '../../css/r/rqgfa4b_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jn1h1itds"/><path clip-rule="evenodd" class="rqgfa4b_q"/></g>`,
		"fallback": "solar:archive-minimalistic-close-outline",
	});
}

export default Component;
