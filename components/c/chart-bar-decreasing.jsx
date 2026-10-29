import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fz6okhbso.css';
import '../../css/g/g9rjqibkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fz6okhbso"/><path class="g9rjqibkq"/></g>`,
		"fallback": "withicons-bauhaus:chart-bar-decreasing",
	});
}

export default Component;
