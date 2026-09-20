import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1c3f5bex.css';
import '../../css/g/glwklsmjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o1c3f5bex"/><path class="glwklsmjc"/></g>`,
		"fallback": "mynaui:edit-one-solid",
	});
}

export default Component;
