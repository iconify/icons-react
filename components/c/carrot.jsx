import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dh98mnuha.css';
import '../../css/n/nw0hazxni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dh98mnuha"/><path class="nw0hazxni"/></g>`,
		"fallback": "andrsrxn:carrot",
	});
}

export default Component;
