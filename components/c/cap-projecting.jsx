import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hy85st8ir.css';
import '../../css/j/jfrelvtns.css';
import '../../css/u/u9b1crbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hy85st8ir"/><path class="jfrelvtns"/><path class="u9b1crbyt"/></g>`,
		"fallback": "hugeicons:cap-projecting",
	});
}

export default Component;
