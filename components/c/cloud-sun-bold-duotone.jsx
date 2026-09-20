import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vn6__6brb.css';
import '../../css/o/omn0ubb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="vn6__6brb"/><path class="omn0ubb6w"/></g>`,
		"fallback": "solar:cloud-sun-bold-duotone",
	});
}

export default Component;
