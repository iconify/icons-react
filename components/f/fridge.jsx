import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d4ckbib4m.css';
import '../../css/l/ltco-mhbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d4ckbib4m"/><path clip-rule="evenodd" class="ltco-mhbm"/></g>`,
		"fallback": "reicon:fridge",
	});
}

export default Component;
