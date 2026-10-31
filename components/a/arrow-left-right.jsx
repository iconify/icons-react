import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j2683rt-e.css';
import '../../css/n/nufpf-yue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="j2683rt-e"/><path class="nufpf-yue"/></g>`,
		"fallback": "withicons-retro:arrow-left-right",
	});
}

export default Component;
