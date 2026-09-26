import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jv2sm3bdr.css';
import '../../css/c/c-2sdjbgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jv2sm3bdr"/><path class="c-2sdjbgw"/></g>`,
		"fallback": "solar:chevrons-right-left-bold",
	});
}

export default Component;
