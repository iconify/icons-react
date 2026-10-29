import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nx5fowxhe.css';
import '../../css/v/vn8-qxupk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nx5fowxhe"/><path class="vn8-qxupk wm-a"/></g>`,
		"fallback": "withicons:alpana",
	});
}

export default Component;
