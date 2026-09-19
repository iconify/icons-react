import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/p/pxigoteko.css';
import '../../css/n/n0z6nacxt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path clip-rule="evenodd" class="pxigoteko"/><path class="n0z6nacxt"/></g>`,
		"fallback": "pepicons:enter",
	});
}

export default Component;
