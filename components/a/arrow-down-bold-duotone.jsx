import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oe1zdnbjl.css';
import '../../css/a/an5517brh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="oe1zdnbjl"/><path class="an5517brh"/></g>`,
		"fallback": "solar:arrow-down-bold-duotone",
	});
}

export default Component;
