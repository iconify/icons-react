import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hpvk132jr.css';
import '../../css/h/h_8ohksmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hpvk132jr secondary"/><path class="h_8ohksmd primary"/></g>`,
		"fallback": "iconaut:ear-off-duotone",
	});
}

export default Component;
