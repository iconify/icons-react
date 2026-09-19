import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bczqgfbnq.css';
import '../../css/m/m5en-zbcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bczqgfbnq"/><path clip-rule="evenodd" class="m5en-zbcw"/></g>`,
		"fallback": "pepicons:gear-filled",
	});
}

export default Component;
