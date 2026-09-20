import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yei_55b9c.css';
import '../../css/v/v5-kg53it.css';
import '../../css/d/dkkref-5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yei_55b9c"/><path class="v5-kg53it"/><path class="dkkref-5n"/></g>`,
		"fallback": "solar:chat-square-off-outline",
	});
}

export default Component;
