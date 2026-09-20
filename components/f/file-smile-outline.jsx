import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vnhmnobuw.css';
import '../../css/y/y3tcgzfpb.css';
import '../../css/f/f4clknuop.css';
import '../../css/c/c0hlzwbrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vnhmnobuw"/><path class="y3tcgzfpb"/><path clip-rule="evenodd" class="f4clknuop"/><path class="c0hlzwbrg"/></g>`,
		"fallback": "solar:file-smile-outline",
	});
}

export default Component;
