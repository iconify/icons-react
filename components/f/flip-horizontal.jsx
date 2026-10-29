import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/ckgc1uv9a.css';
import '../../css/q/qtcqmbb6o.css';
import '../../css/s/s363k5b3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ckgc1uv9a wm-k"/><path class="qtcqmbb6o"/><path class="s363k5b3y wm-s"/></g>`,
		"fallback": "withicons-bauhaus:flip-horizontal",
	});
}

export default Component;
