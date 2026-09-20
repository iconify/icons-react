import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h-8o32bcf.css';
import '../../css/d/dzcqwnoel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h-8o32bcf"/><path clip-rule="evenodd" class="dzcqwnoel"/></g>`,
		"fallback": "reicon:calendar-x-filled",
	});
}

export default Component;
