import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p04q_j6gl.css';
import '../../css/n/nynu0y0bo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p04q_j6gl"/><path class="nynu0y0bo"/></g>`,
		"fallback": "reicon:calculator",
	});
}

export default Component;
