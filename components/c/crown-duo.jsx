import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rltf4qbkr.css';
import '../../css/u/ui32hib9b.css';
import '../../css/b/b-jt0k5cr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rltf4qbkr"/><path class="ui32hib9b wm-a"/><path class="b-jt0k5cr"/></g>`,
		"fallback": "withicons:crown-duo",
	});
}

export default Component;
