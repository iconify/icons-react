import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vppdn4b2v.css';
import '../../css/v/v-prbd6td.css';
import '../../css/z/z3g20mb8y.css';
import '../../css/v/vs-i3xbuv.css';
import '../../css/d/dj9wqb_fy.css';
import '../../css/o/oo5vwdbur.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vppdn4b2v"/><path class="v-prbd6td"/><path class="z3g20mb8y"/><path class="vs-i3xbuv"/><path class="dj9wqb_fy"/><path class="oo5vwdbur"/></g>`,
		"fallback": "fluent-emoji-flat:ice-cream",
	});
}

export default Component;
