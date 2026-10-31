import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/is-3hxbhp.css';
import '../../css/f/fa4fzac5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="is-3hxbhp"/><path class="fa4fzac5c"/></g>`,
		"fallback": "withicons-retro:align-right",
	});
}

export default Component;
