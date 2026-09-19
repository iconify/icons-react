import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bei6z46zr.css';
import '../../css/v/vdtr4hbpu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bei6z46zr"/><path class="vdtr4hbpu"/></g>`,
		"fallback": "bi:egg-fried",
	});
}

export default Component;
