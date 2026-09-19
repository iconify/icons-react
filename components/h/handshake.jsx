import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vwoz82bix.css';
import '../../css/h/hsfk00bqh.css';
import '../../css/j/jtwksbc3b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vwoz82bix"/><path class="hsfk00bqh"/><path clip-rule="evenodd" class="jtwksbc3b"/></g>`,
		"fallback": "pepicons:handshake",
	});
}

export default Component;
