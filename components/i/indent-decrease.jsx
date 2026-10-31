import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lgi0v7b4d.css';
import '../../css/b/bpg8zib9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lgi0v7b4d"/><path class="bpg8zib9k"/></g>`,
		"fallback": "withicons-retro:indent-decrease",
	});
}

export default Component;
