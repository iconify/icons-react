import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wt4afd-2e.css';
import '../../css/l/ltmdfdcin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wt4afd-2e"/><path class="ltmdfdcin"/></g>`,
		"fallback": "gg:bulb",
	});
}

export default Component;
