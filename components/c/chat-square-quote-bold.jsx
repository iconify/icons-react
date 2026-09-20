import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aer82pb0n.css';
import '../../css/u/udf_5ninm.css';
import '../../css/v/vunq9vb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aer82pb0n"/><path class="udf_5ninm"/><path clip-rule="evenodd" class="vunq9vb7t"/></g>`,
		"fallback": "solar:chat-square-quote-bold",
	});
}

export default Component;
