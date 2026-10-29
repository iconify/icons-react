import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w0-632-cs.css';
import '../../css/j/jam8cccqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="w0-632-cs"/><path class="jam8cccqq wm-a"/></g>`,
		"fallback": "withicons:chinese-knot",
	});
}

export default Component;
