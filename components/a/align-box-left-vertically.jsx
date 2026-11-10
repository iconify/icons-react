import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yncetbcjr.css';
import '../../css/n/nygsx9kaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yncetbcjr"/><path class="nygsx9kaa"/></g>`,
		"fallback": "andrsrxn:align-box-left-vertically",
	});
}

export default Component;
