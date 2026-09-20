import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h0lv2dbka.css';
import '../../css/d/dwhrthbwy.css';
import '../../css/j/jxgl27bqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h0lv2dbka"/><path class="dwhrthbwy"/><path clip-rule="evenodd" class="jxgl27bqr"/></g>`,
		"fallback": "solar:folder-pen-bold",
	});
}

export default Component;
