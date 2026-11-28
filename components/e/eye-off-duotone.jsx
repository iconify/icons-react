import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/axwb52jjk.css';
import '../../css/r/ry1p519hs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="axwb52jjk secondary"/><path class="primary ry1p519hs"/></g>`,
		"fallback": "iconaut:eye-off-duotone",
	});
}

export default Component;
