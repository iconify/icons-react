import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jonn9cbay.css';
import '../../css/s/s0kk7bcyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jonn9cbay"/><path clip-rule="evenodd" class="s0kk7bcyp"/></g>`,
		"fallback": "gg:arrows-expand-up-left",
	});
}

export default Component;
