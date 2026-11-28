import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w6rn8nzej.css';
import '../../css/d/d0orp_2dz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="w6rn8nzej"/><path class="d0orp_2dz"/></g>`,
		"fallback": "iconaut:avocado",
	});
}

export default Component;
