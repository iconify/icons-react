import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bz6kg_rvb.css';
import '../../css/t/t0nlbsb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bz6kg_rvb secondary"/><path class="primary t0nlbsb7p"/></g>`,
		"fallback": "iconaut:corner-right-up-duotone",
	});
}

export default Component;
