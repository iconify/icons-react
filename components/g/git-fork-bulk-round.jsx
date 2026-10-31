import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l5q2_7b2j.css';
import '../../css/q/q4525ccds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l5q2_7b2j"/><path class="q4525ccds"/></g>`,
		"fallback": "coolicons:git-fork-bulk-round",
	});
}

export default Component;
