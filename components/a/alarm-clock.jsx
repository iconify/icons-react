import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lztux4j4y.css';
import '../../css/j/jj7r4xgjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lztux4j4y"/><path class="jj7r4xgjd wm-a"/></g>`,
		"fallback": "withicons:alarm-clock",
	});
}

export default Component;
