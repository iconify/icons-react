import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xnsuu1ihi.css';
import '../../css/d/difz02bcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xnsuu1ihi"/><path clip-rule="evenodd" class="difz02bcu"/></g>`,
		"fallback": "reicon:alarm-x",
	});
}

export default Component;
