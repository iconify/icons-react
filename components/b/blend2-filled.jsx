import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tyga36saa.css';
import '../../css/e/ej8bi-bfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tyga36saa"/><path class="ej8bi-bfj"/></g>`,
		"fallback": "reicon:blend2-filled",
	});
}

export default Component;
