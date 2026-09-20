import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mb_3ewxml.css';
import '../../css/b/b9ac9cc7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mb_3ewxml"/><path class="b9ac9cc7m"/></g>`,
		"fallback": "pixelarticons:globe",
	});
}

export default Component;
