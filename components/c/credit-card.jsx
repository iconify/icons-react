import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ij5073bdz.css';
import '../../css/p/pbvjq-6sy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ij5073bdz"/><path clip-rule="evenodd" class="pbvjq-6sy"/></g>`,
		"fallback": "gg:credit-card",
	});
}

export default Component;
