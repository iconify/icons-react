import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t14uo_bze.css';
import '../../css/l/lf3slz66t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t14uo_bze"/><path class="lf3slz66t"/></g>`,
		"fallback": "bi:camera",
	});
}

export default Component;
