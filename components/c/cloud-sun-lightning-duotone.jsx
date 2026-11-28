import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p0stiybzs.css';
import '../../css/x/xq8v8ub1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p0stiybzs secondary"/><path class="primary xq8v8ub1i"/></g>`,
		"fallback": "iconaut:cloud-sun-lightning-duotone",
	});
}

export default Component;
