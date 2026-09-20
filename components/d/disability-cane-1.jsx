import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fpakmjb-j.css';
import '../../css/u/u_vwh4bvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fpakmjb-j"/><path class="u_vwh4bvo"/></g>`,
		"fallback": "streamline-freehand-color:disability-cane-1",
	});
}

export default Component;
