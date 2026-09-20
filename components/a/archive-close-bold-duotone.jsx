import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jbf0c8a6x.css';
import '../../css/z/zg7f-1abd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jbf0c8a6x"/><path clip-rule="evenodd" class="zg7f-1abd"/></g>`,
		"fallback": "solar:archive-close-bold-duotone",
	});
}

export default Component;
