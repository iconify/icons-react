import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lkfcfs20r.css';
import '../../css/j/jjrcuzb2k.css';
import '../../css/y/yb-f48xmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lkfcfs20r"/><path class="jjrcuzb2k"/><path class="yb-f48xmz"/></g>`,
		"fallback": "reicon:bluetooth3-filled",
	});
}

export default Component;
