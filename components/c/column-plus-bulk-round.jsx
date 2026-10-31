import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1_kkbbdy.css';
import '../../css/q/qh8t6jbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f1_kkbbdy"/><path class="qh8t6jbdp"/></g>`,
		"fallback": "coolicons:column-plus-bulk-round",
	});
}

export default Component;
