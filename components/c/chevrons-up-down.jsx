import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mt3f_ybnf.css';
import '../../css/z/zgbky74zi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mt3f_ybnf"/><path class="zgbky74zi"/></g>`,
		"fallback": "withicons-retro:chevrons-up-down",
	});
}

export default Component;
