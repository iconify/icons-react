import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wmvh12f5o.css';
import '../../css/e/eysw8gb8n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wmvh12f5o"/><path class="eysw8gb8n"/></g>`,
		"fallback": "pepicons:exclamation",
	});
}

export default Component;
