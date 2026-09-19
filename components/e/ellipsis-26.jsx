import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jz1mobb4k.css';
import '../../css/t/tnsmnzdvo.css';
import '../../css/e/ecyiiytap.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="jz1mobb4k"/><circle class="tnsmnzdvo"/><circle class="ecyiiytap"/></g>`,
		"fallback": "garden:ellipsis-26",
	});
}

export default Component;
