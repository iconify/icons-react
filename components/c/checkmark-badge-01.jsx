import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/husatjbjt.css';
import '../../css/p/pfvdqccwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="husatjbjt"/><path class="pfvdqccwh"/></g>`,
		"fallback": "hugeicons:checkmark-badge-01",
	});
}

export default Component;
