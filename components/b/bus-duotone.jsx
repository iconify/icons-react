import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l8n-98b4b.css';
import '../../css/u/u_b4w6bhu.css';
import '../../css/y/ylukogwll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l8n-98b4b"/><path clip-rule="evenodd" class="u_b4w6bhu"/><path class="ylukogwll"/></g>`,
		"fallback": "reicon:bus-duotone",
	});
}

export default Component;
