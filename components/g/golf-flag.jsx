import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/llw_un2tp.css';
import '../../css/f/fa4lbbc7g.css';
import '../../css/w/w1me6ibgx.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1)" class="n1lsf0bnc"><ellipse class="llw_un2tp"/><path class="fa4lbbc7g"/><circle class="w1me6ibgx"/></g>`,
		"fallback": "si-glyph:golf-flag",
	});
}

export default Component;
