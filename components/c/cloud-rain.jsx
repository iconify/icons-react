import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xbh61tv4d.css';
import '../../css/j/j0cxxxbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xbh61tv4d"/><path class="j0cxxxbnr"/></g>`,
		"fallback": "reicon:cloud-rain",
	});
}

export default Component;
