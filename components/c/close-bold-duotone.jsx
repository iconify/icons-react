import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1qp2mb1e.css';
import '../../css/b/bazowpbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o1qp2mb1e"/><path class="bazowpbqc"/></g>`,
		"fallback": "solar:close-bold-duotone",
	});
}

export default Component;
