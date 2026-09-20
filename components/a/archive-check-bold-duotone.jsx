import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xx7x-7b8q.css';
import '../../css/j/jbf0c8a6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xx7x-7b8q"/><path class="jbf0c8a6x"/></g>`,
		"fallback": "solar:archive-check-bold-duotone",
	});
}

export default Component;
