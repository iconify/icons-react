import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e18ow5b9y.css';
import '../../css/q/qgvdpubqe.css';
import '../../css/y/y66soqbdl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e18ow5b9y"/><path clip-rule="evenodd" class="qgvdpubqe"/><path class="y66soqbdl"/></g>`,
		"fallback": "glyphs:envelope-open-note-bold",
	});
}

export default Component;
