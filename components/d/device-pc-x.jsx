import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l082cbbuf.css';
import '../../css/p/progj1cwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l082cbbuf"/><path class="progj1cwm"/></g>`,
		"fallback": "andrsrxn:device-pc-x",
	});
}

export default Component;
