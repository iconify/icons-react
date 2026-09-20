import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e75gkwkok.css';
import '../../css/z/z-uv8i-bl.css';
import '../../css/y/y23yr8bll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e75gkwkok"/><path clip-rule="evenodd" class="z-uv8i-bl"/><path class="y23yr8bll"/></g>`,
		"fallback": "reicon:confetti2",
	});
}

export default Component;
