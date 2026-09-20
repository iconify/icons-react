import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lbq113d_q.css';
import '../../css/j/jxbxvmfyx.css';
import '../../css/t/tr6mc7b3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lbq113d_q"/><path class="jxbxvmfyx"/><path class="tr6mc7b3u"/></g>`,
		"fallback": "reicon:calendar-days-filled",
	});
}

export default Component;
