import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iang5ybex.css';
import '../../css/d/dii4pdhpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iang5ybex secondary"/><path class="dii4pdhpy primary"/></g>`,
		"fallback": "iconaut:corner-left-up-duotone",
	});
}

export default Component;
