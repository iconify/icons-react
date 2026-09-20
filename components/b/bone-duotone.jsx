import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/ddghjngwy.css';
import '../../css/e/e7j1zj3bg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ddghjngwy"/><path class="e7j1zj3bg"/></g>`,
		"fallback": "reicon:bone-duotone",
	});
}

export default Component;
