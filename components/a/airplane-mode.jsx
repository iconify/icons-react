import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qrn6p4bhq.css';
import '../../css/r/rzd_-ob4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qrn6p4bhq"/><path class="rzd_-ob4e"/></g>`,
		"fallback": "andrsrxn:airplane-mode",
	});
}

export default Component;
