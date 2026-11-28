import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gm8sjm_bn.css';
import '../../css/p/puyqemc4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gm8sjm_bn secondary"/><path class="primary puyqemc4x"/></g>`,
		"fallback": "iconaut:arrow-right-long-duotone",
	});
}

export default Component;
