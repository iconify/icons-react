import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mkbg1r4zp.css';
import '../../css/h/h9jmrg04z.css';
import '../../css/p/pq1nmouyg.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsCervicalCancerNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="mkbg1r4zp"/><path class="h9jmrg04z"/><path clip-rule="evenodd" class="pq1nmouyg"/></g><defs><clipPath id="healthiconsCervicalCancerNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:cervical-cancer-negative",
	});
}

export default Component;
