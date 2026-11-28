import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lwugzmbcz.css';
import '../../css/j/jtmdy0b6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lwugzmbcz"/><path class="jtmdy0b6t"/></g>`,
		"fallback": "iconaut:arrow-left-duo",
	});
}

export default Component;
