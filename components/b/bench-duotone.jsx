import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mbj4kd3jk.css';
import '../../css/o/o1uvkxbth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mbj4kd3jk secondary"/><path class="o1uvkxbth primary"/></g>`,
		"fallback": "iconaut:bench-duotone",
	});
}

export default Component;
