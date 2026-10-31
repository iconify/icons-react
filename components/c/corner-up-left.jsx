import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hvvjhqbkx.css';
import '../../css/e/e_nl2qnfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hvvjhqbkx"/><path class="e_nl2qnfp"/></g>`,
		"fallback": "withicons-retro:corner-up-left",
	});
}

export default Component;
