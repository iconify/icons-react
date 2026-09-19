import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i-5o_1rqt.css';
import '../../css/x/xewj0obfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i-5o_1rqt"/><path class="xewj0obfy"/></g>`,
		"fallback": "basil:cloud-check-outline",
	});
}

export default Component;
