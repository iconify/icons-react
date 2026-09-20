import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/k/kkkxcvfgx.css';
import '../../css/r/r7m4vr6nk.css';
import '../../css/l/lkwjg8bzf.css';
import '../../css/t/t6qg_cbvk.css';
import '../../css/l/l5tkhob0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="kkkxcvfgx"/><path class="r7m4vr6nk"/><path class="lkwjg8bzf"/><path class="t6qg_cbvk"/><ellipse transform="rotate(-15 8.714 11.328)" class="l5tkhob0v"/></g>`,
		"fallback": "solar:emoji-funny-square-linear",
	});
}

export default Component;
