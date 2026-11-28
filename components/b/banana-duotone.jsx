import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mrsls_mvg.css';
import '../../css/f/fiesn_1wh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mrsls_mvg secondary"/><path class="fiesn_1wh primary"/></g>`,
		"fallback": "iconaut:banana-duotone",
	});
}

export default Component;
