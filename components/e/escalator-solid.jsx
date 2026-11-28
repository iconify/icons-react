import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ryxu9m17o.css';
import '../../css/x/xoykxf0kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ryxu9m17o"/><path class="xoykxf0kc"/></g>`,
		"fallback": "iconaut:escalator-solid",
	});
}

export default Component;
