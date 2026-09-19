import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i__r5hb6p.css';
import '../../css/f/fuwjsyb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i__r5hb6p"/><path clip-rule="evenodd" class="fuwjsyb1x"/></g>`,
		"fallback": "gg:drive",
	});
}

export default Component;
