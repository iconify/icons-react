import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qhu08ydfo.css';
import '../../css/g/g9rjqibkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qhu08ydfo"/><path class="g9rjqibkq"/></g>`,
		"fallback": "withicons-bauhaus:chart-bar-increasing",
	});
}

export default Component;
