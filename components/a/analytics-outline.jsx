import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y1t264bjm.css';
import '../../css/r/r-o9b9btm.css';
import '../../css/w/ws_4u_45s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y1t264bjm"/><path clip-rule="evenodd" class="r-o9b9btm"/><path class="ws_4u_45s"/></g>`,
		"fallback": "glyphs:analytics-outline",
	});
}

export default Component;
