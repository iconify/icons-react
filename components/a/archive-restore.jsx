import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k6qvo9qov.css';
import '../../css/a/a_7c6oboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k6qvo9qov"/><path class="a_7c6oboc"/></g>`,
		"fallback": "withicons-bauhaus:archive-restore",
	});
}

export default Component;
