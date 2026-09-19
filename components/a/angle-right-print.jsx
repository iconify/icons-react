import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jb6igl04p.css';
import '../../css/n/ne31xvb6c.css';
import '../../css/y/y2817u_1x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jb6igl04p"/><path class="ne31xvb6c"/><path class="y2817u_1x"/></g>`,
		"fallback": "pepicons:angle-right-print",
	});
}

export default Component;
