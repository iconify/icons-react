import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7g_o1bkn.css';
import '../../css/w/wpmheycus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c7g_o1bkn"/><path class="wpmheycus"/></g>`,
		"fallback": "andrsrxn:benzene-ring",
	});
}

export default Component;
