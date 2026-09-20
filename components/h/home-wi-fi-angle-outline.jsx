import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kbvt_c6iu.css';
import '../../css/v/v7ghk2b5q.css';
import '../../css/x/x67zadcwx.css';
import '../../css/c/cybrcdc8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kbvt_c6iu"/><path class="v7ghk2b5q"/><path class="x67zadcwx"/><path clip-rule="evenodd" class="cybrcdc8y"/></g>`,
		"fallback": "solar:home-wi-fi-angle-outline",
	});
}

export default Component;
