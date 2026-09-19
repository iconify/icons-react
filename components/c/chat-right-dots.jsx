import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fcwy8u_ql.css';
import '../../css/y/yw57gjbsz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fcwy8u_ql"/><path class="yw57gjbsz"/></g>`,
		"fallback": "bi:chat-right-dots",
	});
}

export default Component;
