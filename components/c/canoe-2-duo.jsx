import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_q9h-uxq.css';
import '../../css/g/gi9kwacwi.css';
import '../../css/g/ggqrbdggc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d_q9h-uxq"/><path class="gi9kwacwi"/><path class="ggqrbdggc"/></g>`,
		"fallback": "glyphs:canoe-2-duo",
	});
}

export default Component;
