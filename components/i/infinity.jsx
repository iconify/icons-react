import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r6l8yrbgu.css';
import '../../css/j/j27cikbda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="r6l8yrbgu"/><path class="j27cikbda"/></g>`,
		"fallback": "withicons-retro:infinity",
	});
}

export default Component;
