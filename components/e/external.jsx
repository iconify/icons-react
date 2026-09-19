import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b_9g8h7mo.css';
import '../../css/q/qycsg4bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b_9g8h7mo"/><path class="qycsg4bbv"/></g>`,
		"fallback": "gg:external",
	});
}

export default Component;
