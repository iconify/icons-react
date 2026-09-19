import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wga33z4mh.css';
import '../../css/k/kh32xkbva.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wga33z4mh"/><path clip-rule="evenodd" class="kh32xkbva"/></g>`,
		"fallback": "heroicons:calendar-days-20-solid",
	});
}

export default Component;
