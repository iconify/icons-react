import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oa6fgqbwh.css';
import '../../css/v/vnoso5bpg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="oa6fgqbwh"/><path class="vnoso5bpg"/></g>`,
		"fallback": "glyphs:bell-exclamation-bold",
	});
}

export default Component;
