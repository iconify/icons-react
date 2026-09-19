import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jjxo-59lz.css';
import '../../css/b/bhinfms0i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jjxo-59lz"/><path class="bhinfms0i"/></g>`,
		"fallback": "glyphs:arrow-solid-curve-bold",
	});
}

export default Component;
