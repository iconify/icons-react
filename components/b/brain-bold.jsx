import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yi0vp2biw.css';
import '../../css/p/plq8cklzl.css';
import '../../css/n/nqeg6l1lc.css';
import '../../css/n/ns361sykx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yi0vp2biw"/><path class="plq8cklzl"/><path clip-rule="evenodd" class="nqeg6l1lc"/><path class="ns361sykx"/></g>`,
		"fallback": "glyphs:brain-bold",
	});
}

export default Component;
