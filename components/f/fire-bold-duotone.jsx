import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j5akrjbvy.css';
import '../../css/i/ito6udivm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j5akrjbvy"/><path class="ito6udivm"/></g>`,
		"fallback": "solar:fire-bold-duotone",
	});
}

export default Component;
