import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d054gcbgd.css';
import '../../css/e/exmdu93_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d054gcbgd secondary"/><path class="exmdu93_g primary"/></g>`,
		"fallback": "iconaut:calendar-fold-duotone",
	});
}

export default Component;
