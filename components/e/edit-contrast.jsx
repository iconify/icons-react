import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qzxhbdctr.css';
import '../../css/f/fyastt82y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qzxhbdctr"/><path clip-rule="evenodd" class="fyastt82y"/></g>`,
		"fallback": "gg:edit-contrast",
	});
}

export default Component;
