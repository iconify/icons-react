import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uxqznfbmz.css';
import '../../css/e/epsclqbxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uxqznfbmz"/><path class="epsclqbxv"/></g>`,
		"fallback": "pixelarticons:corner-left-up",
	});
}

export default Component;
