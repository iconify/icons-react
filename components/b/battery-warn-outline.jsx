import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yp71w5j_f.css';
import '../../css/m/m24p57kbj.css';
import '../../css/y/ysyj_mb-h.css';
import '../../css/c/cs2xpclua.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yp71w5j_f"/><path clip-rule="evenodd" class="m24p57kbj"/><path class="ysyj_mb-h"/><path clip-rule="evenodd" class="cs2xpclua"/></g>`,
		"fallback": "glyphs:battery-warn-outline",
	});
}

export default Component;
