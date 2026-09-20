import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j7vq9lbhd.css';
import '../../css/x/x59fuv1nw.css';
import '../../css/p/p-nzwk9jc.css';
import '../../css/g/gewiseacf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j7vq9lbhd"/><path clip-rule="evenodd" class="x59fuv1nw"/><path clip-rule="evenodd" class="p-nzwk9jc"/><path clip-rule="evenodd" class="gewiseacf"/></g>`,
		"fallback": "solar:cart-cross-outline",
	});
}

export default Component;
