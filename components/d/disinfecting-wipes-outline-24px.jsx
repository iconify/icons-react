import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zi5e8o4jp.css';
import '../../css/c/cu_5bgb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zi5e8o4jp"/><path clip-rule="evenodd" class="cu_5bgb1s"/></g>`,
		"fallback": "healthicons:disinfecting-wipes-outline-24px",
	});
}

export default Component;
