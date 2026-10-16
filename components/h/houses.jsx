import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xua-w5blz.css';
import '../../css/r/r38va_v3y.css';
import '../../css/t/ty_-a6b6o.css';
import '../../css/f/fa_g6dbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xua-w5blz"/><path class="r38va_v3y"/><path class="ty_-a6b6o"/><path class="fa_g6dbpa"/></g>`,
		"fallback": "andrsrxn:houses",
	});
}

export default Component;
