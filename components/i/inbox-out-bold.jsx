import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zpazotbvo.css';
import '../../css/q/qj2_vhona.css';
import '../../css/x/x4_lcrb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zpazotbvo"/><path class="qj2_vhona"/><path class="x4_lcrb9u"/></g>`,
		"fallback": "solar:inbox-out-bold",
	});
}

export default Component;
