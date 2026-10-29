import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zfv9git5q.css';
import '../../css/i/ihj0uzb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="zfv9git5q"/><path class="ihj0uzb-n"/></g>`,
		"fallback": "withicons-bauhaus:chopsticks",
	});
}

export default Component;
