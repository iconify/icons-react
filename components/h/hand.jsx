import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vh4_jvb7b.css';
import '../../css/j/jofkexr8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vh4_jvb7b"/><path class="jofkexr8t"/></g>`,
		"fallback": "withicons:hand",
	});
}

export default Component;
