import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y8cqvubfh.css';
import '../../css/u/uk42fjmeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="y8cqvubfh"/><path class="uk42fjmeg"/></g>`,
		"fallback": "withicons-retro:chevron-last",
	});
}

export default Component;
