import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hs0oqebvk.css';
import '../../css/q/qtbao2boh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hs0oqebvk"/><path class="qtbao2boh"/></g>`,
		"fallback": "solar:cloud-minus-bold",
	});
}

export default Component;
