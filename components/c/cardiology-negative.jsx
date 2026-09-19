import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vdbu14k_k.css';
import '../../css/n/nc36z5bxi.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsCardiologyNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="vdbu14k_k"/><path class="nc36z5bxi"/></g><defs><clipPath id="healthiconsCardiologyNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:cardiology-negative",
	});
}

export default Component;
