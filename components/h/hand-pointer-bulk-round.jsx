import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dqy8y8ccg.css';
import '../../css/o/o9bbhtbub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dqy8y8ccg"/><path class="o9bbhtbub"/></g>`,
		"fallback": "coolicons:hand-pointer-bulk-round",
	});
}

export default Component;
