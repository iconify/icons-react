import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dp2ht-b-t.css';
import '../../css/z/zh32wopud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dp2ht-b-t"/><path class="zh32wopud"/></g>`,
		"fallback": "healthicons:defibrillator-outline-24px",
	});
}

export default Component;
