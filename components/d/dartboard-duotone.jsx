import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y4v5b1z3k.css';
import '../../css/z/zf_caujcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary y4v5b1z3k"/><path class="primary zf_caujcx"/></g>`,
		"fallback": "iconaut:dartboard-duotone",
	});
}

export default Component;
