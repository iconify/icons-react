import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wr9dlac0u.css';
import '../../css/q/qb5ipy-9h.css';

const viewBox = {"width":201,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wr9dlac0u"/><path clip-rule="evenodd" class="qb5ipy-9h"/></g>`,
		"fallback": "thesvg-color:binance",
	});
}

export default Component;
