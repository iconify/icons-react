import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nlbukzbvh.css';
import '../../css/n/nsvaqzcrz.css';
import '../../css/e/enxj31s0p.css';
import '../../css/b/bgasabkle.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nlbukzbvh"/><path class="nsvaqzcrz"/><path class="enxj31s0p"/><path clip-rule="evenodd" class="bgasabkle"/></g>`,
		"fallback": "glyphs:eye-slash-bold",
	});
}

export default Component;
