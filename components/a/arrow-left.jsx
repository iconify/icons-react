import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mj3888b0j.css';
import '../../css/o/o72pgoz5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mj3888b0j"/><path class="o72pgoz5i"/></g>`,
		"fallback": "withicons-retro:arrow-left",
	});
}

export default Component;
