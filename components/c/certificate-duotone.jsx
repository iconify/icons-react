import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ehtec721f.css';
import '../../css/n/nd1p111gt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ehtec721f secondary"/><path class="nd1p111gt primary"/></g>`,
		"fallback": "iconaut:certificate-duotone",
	});
}

export default Component;
