import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qq3_8_bav.css';
import '../../css/x/xocq98voj.css';
import '../../css/x/xeu5cddlu.css';
import '../../css/d/dzdfpcczr.css';
import '../../css/m/m7m9t0bvj.css';
import '../../css/d/dlbhh2blg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qq3_8_bav"/><path class="xocq98voj"/><path class="xeu5cddlu"/><path class="dzdfpcczr"/><path class="m7m9t0bvj"/><path class="dlbhh2blg"/></g>`,
		"fallback": "glyphs:comment-asterisk-duo",
	});
}

export default Component;
