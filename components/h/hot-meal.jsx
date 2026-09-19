import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/btwg08bfy.css';
import '../../css/i/iu_q38bvn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="btwg08bfy"/><path clip-rule="evenodd" class="iu_q38bvn"/></g>`,
		"fallback": "healthicons:hot-meal",
	});
}

export default Component;
