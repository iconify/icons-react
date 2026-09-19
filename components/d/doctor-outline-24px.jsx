import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/plw0h3b6e.css';
import '../../css/p/ptscz1b3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="plw0h3b6e"/><path clip-rule="evenodd" class="ptscz1b3q"/></g>`,
		"fallback": "healthicons:doctor-outline-24px",
	});
}

export default Component;
