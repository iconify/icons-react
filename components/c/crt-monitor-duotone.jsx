import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l2jz8pbgw.css';
import '../../css/m/mjq-t7b8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l2jz8pbgw secondary"/><path class="mjq-t7b8v primary"/></g>`,
		"fallback": "iconaut:crt-monitor-duotone",
	});
}

export default Component;
