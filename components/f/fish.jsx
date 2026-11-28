import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lvd82jv5z.css';
import '../../css/t/t92y3z_3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lvd82jv5z"/><path class="t92y3z_3b"/></g>`,
		"fallback": "iconaut:fish",
	});
}

export default Component;
