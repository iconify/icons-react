import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t4ccy1u0g.css';
import '../../css/u/u7ufek3ss.css';
import '../../css/a/aghrgjb2h.css';
import '../../css/z/zmod0qb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(135 7.228 7.675)scale(-1 1)" class="t4ccy1u0g"/><path class="u7ufek3ss"/><path class="aghrgjb2h"/><path class="zmod0qb7c"/></g>`,
		"fallback": "andrsrxn:draw-sparkle",
	});
}

export default Component;
