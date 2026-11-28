import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fduh39boj.css';
import '../../css/j/j-3qj_bbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fduh39boj secondary"/><path class="j-3qj_bbm primary"/></g>`,
		"fallback": "iconaut:castle-duotone",
	});
}

export default Component;
