import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j1gw22kqu.css';
import '../../css/i/i7bp4pbtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="j1gw22kqu"/><path class="i7bp4pbtf"/></g>`,
		"fallback": "withicons-retro:chevron-first",
	});
}

export default Component;
