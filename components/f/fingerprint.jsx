import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tkt8u4hzo.css';
import '../../css/c/csew3wblh.css';
import '../../css/l/l_161docl.css';
import '../../css/y/yuyv6cc-u.css';
import '../../css/t/tmf253bug.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tkt8u4hzo"/><path class="csew3wblh"/><path class="l_161docl"/><path class="yuyv6cc-u"/><path class="tmf253bug"/></g>`,
		"fallback": "bi:fingerprint",
	});
}

export default Component;
