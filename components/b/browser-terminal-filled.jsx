import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k89izbcfe.css';
import '../../css/f/f50fsyanf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k89izbcfe"/><path clip-rule="evenodd" class="f50fsyanf"/></g>`,
		"fallback": "reicon:browser-terminal-filled",
	});
}

export default Component;
