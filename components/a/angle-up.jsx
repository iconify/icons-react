import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wxmasbccv.css';
import '../../css/o/otjsuccnv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wxmasbccv"/><path class="otjsuccnv"/></g>`,
		"fallback": "pepicons:angle-up",
	});
}

export default Component;
