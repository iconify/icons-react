import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d8g36nb4x.css';
import '../../css/h/hawj73bow.css';
import '../../css/y/y4sbhjvpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d8g36nb4x"/><path class="hawj73bow"/><path clip-rule="evenodd" class="y4sbhjvpp"/></g>`,
		"fallback": "reicon:bullseye",
	});
}

export default Component;
