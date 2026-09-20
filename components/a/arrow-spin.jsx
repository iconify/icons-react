import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/luxlqfrxi.css';
import '../../css/v/v56dgzb1x.css';
import '../../css/e/e1lspva1l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="luxlqfrxi"/><path class="v56dgzb1x"/><path class="e1lspva1l"/></g>`,
		"fallback": "pepicons-pencil:arrow-spin",
	});
}

export default Component;
