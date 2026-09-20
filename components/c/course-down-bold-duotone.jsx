import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h272pip6s.css';
import '../../css/c/cg29ft-8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h272pip6s"/><path class="cg29ft-8e"/></g>`,
		"fallback": "solar:course-down-bold-duotone",
	});
}

export default Component;
