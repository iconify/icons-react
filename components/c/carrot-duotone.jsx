import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mepyx35zj.css';
import '../../css/q/q-bmf0s-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mepyx35zj secondary"/><path class="primary q-bmf0s-w"/></g>`,
		"fallback": "iconaut:carrot-duotone",
	});
}

export default Component;
