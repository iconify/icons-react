import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fpblvub4y.css';
import '../../css/e/eh-g229ix.css';
import '../../css/k/kzq3j1bop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fpblvub4y"/><path class="eh-g229ix"/><path class="kzq3j1bop"/></g>`,
		"fallback": "reicon:cart-large2-duotone",
	});
}

export default Component;
