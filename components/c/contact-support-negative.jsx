import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tn64s4b7m.css';
import '../../css/q/qwabj6bdb.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsContactSupportNegative0)" class="cuyn6tgcc"><path class="tn64s4b7m"/><path clip-rule="evenodd" class="qwabj6bdb"/></g><defs><clipPath id="healthiconsContactSupportNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:contact-support-negative",
	});
}

export default Component;
