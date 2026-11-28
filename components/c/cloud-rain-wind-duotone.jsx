import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bj587tp1e.css';
import '../../css/c/cjzz__bnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bj587tp1e secondary"/><path class="cjzz__bnl primary"/></g>`,
		"fallback": "iconaut:cloud-rain-wind-duotone",
	});
}

export default Component;
