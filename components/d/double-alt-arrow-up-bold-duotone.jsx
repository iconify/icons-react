import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ao6vq1b1u.css';
import '../../css/l/lu5wldhly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ao6vq1b1u"/><path clip-rule="evenodd" class="lu5wldhly"/></g>`,
		"fallback": "solar:double-alt-arrow-up-bold-duotone",
	});
}

export default Component;
