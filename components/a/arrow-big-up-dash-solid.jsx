import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nkk58rbpf.css';
import '../../css/l/lqgf2_b6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nkk58rbpf"/><path class="lqgf2_b6f"/></g>`,
		"fallback": "iconaut:arrow-big-up-dash-solid",
	});
}

export default Component;
