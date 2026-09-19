import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxtz0zbyr.css';
import '../../css/v/v-dogif5m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hxtz0zbyr"/><path class="v-dogif5m"/></g>`,
		"fallback": "pepicons:dots-x-print",
	});
}

export default Component;
