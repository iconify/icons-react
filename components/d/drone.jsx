import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/hr07nwq7t.css';
import '../../css/t/t96a34een.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="hr07nwq7t"/><path class="t96a34een wm-a"/></g>`,
		"fallback": "withicons:drone",
	});
}

export default Component;
