import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hv2z6qbnh.css';
import '../../css/j/j8ypzwb8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hv2z6qbnh"/><path clip-rule="evenodd" class="j8ypzwb8i"/></g>`,
		"fallback": "gg:check-o",
	});
}

export default Component;
