import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o3j52-bvb.css';
import '../../css/j/js1uogbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o3j52-bvb secondary"/><path class="js1uogbcd primary"/></g>`,
		"fallback": "iconaut:devices-duotone",
	});
}

export default Component;
