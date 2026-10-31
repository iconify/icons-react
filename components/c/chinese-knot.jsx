import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k00pved2p.css';
import '../../css/q/qaps5b9qi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k00pved2p"/><path class="qaps5b9qi"/></g>`,
		"fallback": "withicons-retro:chinese-knot",
	});
}

export default Component;
