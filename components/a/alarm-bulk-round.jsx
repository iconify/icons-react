import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rxtmbxbvl.css';
import '../../css/a/a09ee3jto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rxtmbxbvl"/><path class="a09ee3jto"/></g>`,
		"fallback": "coolicons:alarm-bulk-round",
	});
}

export default Component;
