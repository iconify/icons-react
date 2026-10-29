import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b-jt0k5cr.css';
import '../../css/u/ui32hib9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="b-jt0k5cr"/><path class="ui32hib9b wm-a"/></g>`,
		"fallback": "withicons:crown",
	});
}

export default Component;
