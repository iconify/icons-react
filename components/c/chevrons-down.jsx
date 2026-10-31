import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n9az1oxym.css';
import '../../css/w/w9o4unoiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="n9az1oxym"/><path class="w9o4unoiq"/></g>`,
		"fallback": "withicons-retro:chevrons-down",
	});
}

export default Component;
