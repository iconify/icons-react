import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a31krwbep.css';
import '../../css/w/w21ai_b8z.css';
import '../../css/u/u5zkj2_9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a31krwbep"/><path class="w21ai_b8z"/><path class="u5zkj2_9b"/></g>`,
		"fallback": "iconaut:hand-peace",
	});
}

export default Component;
