import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bgwqsrfvl.css';
import '../../css/q/qzfw0gqjk.css';
import '../../css/d/d5qir-b6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bgwqsrfvl"/><path class="qzfw0gqjk"/><path class="d5qir-b6q"/></g>`,
		"fallback": "withicons-bauhaus:house-wifi",
	});
}

export default Component;
