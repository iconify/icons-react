import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/myxg_bcjw.css';
import '../../css/a/awtsf2bus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="myxg_bcjw secondary"/><path class="awtsf2bus primary"/></g>`,
		"fallback": "iconaut:acorn-duotone",
	});
}

export default Component;
