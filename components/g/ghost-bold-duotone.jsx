import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f8iql8u_l.css';
import '../../css/u/un7ztky7q.css';
import '../../css/v/vnbx2b2zx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f8iql8u_l"/><path class="un7ztky7q"/><path class="vnbx2b2zx"/></g>`,
		"fallback": "solar:ghost-bold-duotone",
	});
}

export default Component;
