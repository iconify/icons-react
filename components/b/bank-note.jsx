import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yv43fxbia.css';
import '../../css/s/sskw0sk9f.css';
import '../../css/x/xwmfe6b9k.css';
import '../../css/f/f4brc0bci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.31 19)" class="yv43fxbia"/><rect transform="matrix(0 -1 -1 0 22.31 19)" class="sskw0sk9f"/><path class="xwmfe6b9k"/><path class="f4brc0bci"/></g>`,
		"fallback": "andrsrxn:bank-note",
	});
}

export default Component;
