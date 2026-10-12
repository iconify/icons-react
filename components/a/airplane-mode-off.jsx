import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qrn6p4bhq.css';
import '../../css/o/o5v0n3b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qrn6p4bhq"/><path class="o5v0n3b2v"/></g>`,
		"fallback": "andrsrxn:airplane-mode-off",
	});
}

export default Component;
