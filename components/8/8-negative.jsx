import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h6ixtxbck.css';
import '../../css/j/jqr3nvo3o.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthicons8Negative0)" class="cuyn6tgcc"><path class="h6ixtxbck"/><path clip-rule="evenodd" class="jqr3nvo3o"/></g><defs><clipPath id="healthicons8Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:8-negative",
	});
}

export default Component;
