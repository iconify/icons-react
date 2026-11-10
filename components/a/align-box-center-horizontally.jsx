import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yncetbcjr.css';
import '../../css/i/iqn8-tblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yncetbcjr"/><path class="iqn8-tblh"/></g>`,
		"fallback": "andrsrxn:align-box-center-horizontally",
	});
}

export default Component;
