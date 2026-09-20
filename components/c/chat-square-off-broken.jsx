import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yu_fd_b3j.css';
import '../../css/r/rami70jvc.css';
import '../../css/c/cwioucchd.css';
import '../../css/j/j-zik85gg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yu_fd_b3j"/><path class="rami70jvc"/><path class="cwioucchd"/><path class="j-zik85gg"/></g>`,
		"fallback": "solar:chat-square-off-broken",
	});
}

export default Component;
