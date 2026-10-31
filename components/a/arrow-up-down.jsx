import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v0tqzwu0k.css';
import '../../css/e/e6yk0qbey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="v0tqzwu0k"/><path class="e6yk0qbey"/></g>`,
		"fallback": "withicons-retro:arrow-up-down",
	});
}

export default Component;
