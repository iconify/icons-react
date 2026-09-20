import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dde2x0-7s.css';
import '../../css/i/icl6lluhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dde2x0-7s"/><path class="icl6lluhh"/></g>`,
		"fallback": "reicon:fire-duotone",
	});
}

export default Component;
