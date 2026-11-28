import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2ce2cczp.css';
import '../../css/k/kctplbv_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f2ce2cczp secondary"/><path class="kctplbv_d primary"/></g>`,
		"fallback": "iconaut:gate-and-duotone",
	});
}

export default Component;
