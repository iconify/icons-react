import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dawcsab1j.css';
import '../../css/e/e7bpgobsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dawcsab1j"/><path class="e7bpgobsr"/></g>`,
		"fallback": "hugeicons:circle-arrow-move-down-right",
	});
}

export default Component;
