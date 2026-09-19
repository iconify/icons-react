import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vid5vbcza.css';
import '../../css/d/drdnk5nlr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vid5vbcza"/><path class="drdnk5nlr"/></g>`,
		"fallback": "glyphs:bolt-bold",
	});
}

export default Component;
