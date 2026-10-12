import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hd3mr0bxs.css';
import '../../css/r/rzd_-ob4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hd3mr0bxs"/><path class="rzd_-ob4e"/></g>`,
		"fallback": "andrsrxn:airplane-mode-filled",
	});
}

export default Component;
