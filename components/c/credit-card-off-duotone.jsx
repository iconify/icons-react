import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kaozwliaa.css';
import '../../css/r/rbcrnjb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kaozwliaa secondary"/><path class="primary rbcrnjb9x"/></g>`,
		"fallback": "iconaut:credit-card-off-duotone",
	});
}

export default Component;
