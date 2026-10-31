import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o80lnh89k.css';
import '../../css/e/e-6zcfj6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="o80lnh89k"/><path class="e-6zcfj6s"/></g>`,
		"fallback": "withicons-retro:arrow-up-left",
	});
}

export default Component;
