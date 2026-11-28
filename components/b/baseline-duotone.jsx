import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bfmci4c1s.css';
import '../../css/k/klukscont.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bfmci4c1s secondary"/><path class="klukscont primary"/></g>`,
		"fallback": "iconaut:baseline-duotone",
	});
}

export default Component;
