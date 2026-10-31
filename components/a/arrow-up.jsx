import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uhhhecc9q.css';
import '../../css/a/a6lcokbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uhhhecc9q"/><path class="a6lcokbke"/></g>`,
		"fallback": "withicons-retro:arrow-up",
	});
}

export default Component;
