import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cn0g7j1-i.css';
import '../../css/n/nkf5_lt8x.css';
import '../../css/u/uj2alqbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cn0g7j1-i"/><circle transform="rotate(90 12 12)" class="nkf5_lt8x"/><path class="uj2alqbrr"/></g>`,
		"fallback": "andrsrxn:eclipse",
	});
}

export default Component;
