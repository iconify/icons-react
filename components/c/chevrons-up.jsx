import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vuv598b9b.css';
import '../../css/w/w7az6qnzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vuv598b9b"/><path class="w7az6qnzw wm-a"/></g>`,
		"fallback": "withicons:chevrons-up",
	});
}

export default Component;
