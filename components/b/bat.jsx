import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lo5diacvh.css';
import '../../css/n/niy053bzl.css';
import '../../css/x/xd9vv6i7b.css';
import '../../css/p/psik3qb0g.css';
import '../../css/b/b-3admbxn.css';
import '../../css/k/kl2h-77kr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="lo5diacvh wm-shadow"/><path class="niy053bzl wm-shadow"/><path class="xd9vv6i7b"/><path class="psik3qb0g"/><path class="b-3admbxn"/><path class="kl2h-77kr"/></g>`,
		"fallback": "withicons-brutal:bat",
	});
}

export default Component;
