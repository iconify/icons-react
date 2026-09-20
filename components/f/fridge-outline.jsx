import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x9a1124li.css';
import '../../css/s/s8batg03y.css';
import '../../css/y/yj_5s8bsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x9a1124li"/><path class="s8batg03y"/><path clip-rule="evenodd" class="yj_5s8bsr"/></g>`,
		"fallback": "solar:fridge-outline",
	});
}

export default Component;
