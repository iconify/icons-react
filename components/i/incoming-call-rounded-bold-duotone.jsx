import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pdil79z1g.css';
import '../../css/j/j91-b1bhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pdil79z1g"/><path class="j91-b1bhj"/></g>`,
		"fallback": "solar:incoming-call-rounded-bold-duotone",
	});
}

export default Component;
