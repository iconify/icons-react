import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ip_1t-67b.css';
import '../../css/z/z018i1eis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ip_1t-67b"/><path class="z018i1eis"/></g>`,
		"fallback": "reicon:branch-up-duotone",
	});
}

export default Component;
