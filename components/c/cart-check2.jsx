import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q0uat2jga.css';
import '../../css/m/m6rp1rmkb.css';
import '../../css/w/w9p3ambxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q0uat2jga"/><path class="m6rp1rmkb"/><path clip-rule="evenodd" class="w9p3ambxu"/></g>`,
		"fallback": "reicon:cart-check2",
	});
}

export default Component;
