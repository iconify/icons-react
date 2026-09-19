import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d_ieg7u_u.css';
import '../../css/p/pmlng5ayj.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="d_ieg7u_u"/><path class="pmlng5ayj"/></g>`,
		"fallback": "si-glyph:button-buy",
	});
}

export default Component;
