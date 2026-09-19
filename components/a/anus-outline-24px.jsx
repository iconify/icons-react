import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dbpc681_d.css';
import '../../css/i/iwy2_xosz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dbpc681_d"/><path clip-rule="evenodd" class="iwy2_xosz"/></g>`,
		"fallback": "healthicons:anus-outline-24px",
	});
}

export default Component;
