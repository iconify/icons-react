import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bplzvwbrc.css';
import '../../css/y/y31r6tbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bplzvwbrc"/><path class="y31r6tbyo"/></g>`,
		"fallback": "solar:chevron-first-bold",
	});
}

export default Component;
