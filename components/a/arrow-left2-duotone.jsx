import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ad90q67jp.css';
import '../../css/u/ut9z3nbnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ad90q67jp"/><path class="ut9z3nbnq"/></g>`,
		"fallback": "reicon:arrow-left2-duotone",
	});
}

export default Component;
