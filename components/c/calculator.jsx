import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rltm14bop.css';
import '../../css/c/cguqcab3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rltm14bop"/><path clip-rule="evenodd" class="cguqcab3p"/></g>`,
		"fallback": "gg:calculator",
	});
}

export default Component;
