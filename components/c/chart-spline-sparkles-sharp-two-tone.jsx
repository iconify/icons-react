import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rrv08ccnq.css';
import '../../css/i/i0e4rqb2u.css';
import '../../css/z/zr5m9kbwl.css';
import '../../css/z/z3w9o1b2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="rrv08ccnq"/><path class="i0e4rqb2u"/><path class="zr5m9kbwl"/><path class="z3w9o1b2x"/></g>`,
		"fallback": "keyline-icons:chart-spline-sparkles-sharp-two-tone",
	});
}

export default Component;
