import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ryzdgqbmc.css';
import '../../css/u/u0nnfubxp.css';
import '../../css/q/qrvidobik.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ryzdgqbmc"/><path clip-rule="evenodd" class="u0nnfubxp"/><path class="qrvidobik"/></g>`,
		"fallback": "codicon:compass-active",
	});
}

export default Component;
