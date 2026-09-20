import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/glee7kbop.css';
import '../../css/t/t4-qd5brb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="glee7kbop"/><path class="t4-qd5brb"/></g>`,
		"fallback": "solar:cursor-bold-duotone",
	});
}

export default Component;
