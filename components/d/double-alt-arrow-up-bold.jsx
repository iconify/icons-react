import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lu5wldhly.css';
import '../../css/j/jtyxtmpha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lu5wldhly"/><path class="jtyxtmpha"/></g>`,
		"fallback": "solar:double-alt-arrow-up-bold",
	});
}

export default Component;
