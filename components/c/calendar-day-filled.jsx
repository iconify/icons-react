import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h-8o32bcf.css';
import '../../css/r/rgbm1_2zm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h-8o32bcf"/><path clip-rule="evenodd" class="rgbm1_2zm"/></g>`,
		"fallback": "reicon:calendar-day-filled",
	});
}

export default Component;
