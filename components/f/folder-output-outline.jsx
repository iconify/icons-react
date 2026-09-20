import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xiy94nmxx.css';
import '../../css/u/uj2wqib6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xiy94nmxx"/><path class="uj2wqib6v"/></g>`,
		"fallback": "solar:folder-output-outline",
	});
}

export default Component;
