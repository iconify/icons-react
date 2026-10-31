import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xpgynjbwd.css';
import '../../css/d/d144mhbob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="xpgynjbwd"/><path class="d144mhbob"/></g>`,
		"fallback": "withicons-retro:braces",
	});
}

export default Component;
