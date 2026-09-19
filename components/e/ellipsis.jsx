import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds88-_b_m.css';
import '../../css/y/ydri2mr6x.css';
import '../../css/r/rj1y-5bkj.css';
import '../../css/u/uu14cb_qr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ds88-_b_m"><rect class="ydri2mr6x"/><rect class="rj1y-5bkj"/><rect class="uu14cb_qr"/></g>`,
		"fallback": "glyphs-poly:ellipsis",
	});
}

export default Component;
