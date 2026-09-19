import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/npr9dvbkk.css';
import '../../css/v/v8a3xqb9t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="npr9dvbkk"/><path class="v8a3xqb9t"/></g>`,
		"fallback": "heroicons:arrow-down-tray-20-solid",
	});
}

export default Component;
