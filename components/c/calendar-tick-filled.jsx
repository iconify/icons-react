import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/auufjz1jj.css';
import '../../css/z/zijugj0pm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="auufjz1jj"/><path class="zijugj0pm"/></g>`,
		"fallback": "reicon:calendar-tick-filled",
	});
}

export default Component;
