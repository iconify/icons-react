import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cllaacb7n.css';
import '../../css/o/o6whjovqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cllaacb7n"/><path class="o6whjovqh"/></g>`,
		"fallback": "coolicons:crop-bulk-round",
	});
}

export default Component;
