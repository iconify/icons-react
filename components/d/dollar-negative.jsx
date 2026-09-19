import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u1xqpmbgn.css';
import '../../css/b/b99qn9rzk.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsDollarNegative0)" class="cuyn6tgcc"><path class="u1xqpmbgn"/><path clip-rule="evenodd" class="b99qn9rzk"/></g><defs><clipPath id="healthiconsDollarNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:dollar-negative",
	});
}

export default Component;
