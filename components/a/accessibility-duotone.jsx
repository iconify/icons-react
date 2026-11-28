import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j3zvu2xhf.css';
import '../../css/z/zk-cq7c1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j3zvu2xhf secondary"/><path class="primary zk-cq7c1r"/></g>`,
		"fallback": "iconaut:accessibility-duotone",
	});
}

export default Component;
