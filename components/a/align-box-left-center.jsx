import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/waiut1beq.css';
import '../../css/g/g3__322mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="waiut1beq"/><path class="g3__322mg"/></g>`,
		"fallback": "andrsrxn:align-box-left-center",
	});
}

export default Component;
