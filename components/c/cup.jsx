import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dvdb5bc0m.css';
import '../../css/f/fiddvovtr.css';
import '../../css/v/vy59pubxe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dvdb5bc0m"/><path clip-rule="evenodd" class="fiddvovtr"/><path class="vy59pubxe"/></g>`,
		"fallback": "pepicons-print:cup",
	});
}

export default Component;
