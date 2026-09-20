import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vc_bw3brk.css';
import '../../css/b/blb4e_b3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vc_bw3brk"/><path class="blb4e_b3b"/></g>`,
		"fallback": "majesticons:check-circle-line",
	});
}

export default Component;
