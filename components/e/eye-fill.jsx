import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bsz5v7v8x.css';
import '../../css/v/vxkibmbwc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bsz5v7v8x"/><path class="vxkibmbwc"/></g>`,
		"fallback": "bi:eye-fill",
	});
}

export default Component;
