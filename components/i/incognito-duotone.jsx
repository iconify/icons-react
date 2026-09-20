import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hi360ub3v.css';
import '../../css/z/zx6p1mxlm.css';
import '../../css/p/pkuo_xbsn.css';
import '../../css/d/dapqk4b1q.css';
import '../../css/t/t1mr37dne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hi360ub3v"/><path clip-rule="evenodd" class="zx6p1mxlm"/><path class="pkuo_xbsn"/><path class="dapqk4b1q"/><path class="t1mr37dne"/></g>`,
		"fallback": "reicon:incognito-duotone",
	});
}

export default Component;
