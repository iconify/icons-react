import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/f1f-uxz-j.css';
import '../../css/j/j2fdrmlsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="f1f-uxz-j"/><path class="j2fdrmlsd"/></g>`,
		"fallback": "withicons-retro:corner-up-right",
	});
}

export default Component;
