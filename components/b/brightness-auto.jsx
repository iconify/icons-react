import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e6pbpxkps.css';
import '../../css/k/kw3671bxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e6pbpxkps"/><path class="kw3671bxn"/></g>`,
		"fallback": "andrsrxn:brightness-auto",
	});
}

export default Component;
