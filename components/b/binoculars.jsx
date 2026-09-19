import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/to0agsl-s.css';
import '../../css/u/uz4s9f2zl.css';
import '../../css/x/x-wzhcbfg.css';
import '../../css/v/vs_w-pk8z.css';
import '../../css/a/amxhqhb4f.css';
import '../../css/w/wz1v0fbcr.css';
import '../../css/i/ikcc9xdal.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="to0agsl-s"/><path clip-rule="evenodd" class="uz4s9f2zl"/><path clip-rule="evenodd" class="x-wzhcbfg"/><path clip-rule="evenodd" class="vs_w-pk8z"/><path class="amxhqhb4f"/><path clip-rule="evenodd" class="wz1v0fbcr"/><path class="ikcc9xdal"/></g>`,
		"fallback": "glyphs-poly:binoculars",
	});
}

export default Component;
