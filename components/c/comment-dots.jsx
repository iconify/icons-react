import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lswt-f0xo.css';
import '../../css/r/rev5iwbfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lswt-f0xo"/><path clip-rule="evenodd" class="rev5iwbfr"/></g>`,
		"fallback": "reicon:comment-dots",
	});
}

export default Component;
