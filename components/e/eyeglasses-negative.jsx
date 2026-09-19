import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/og1fybc0v.css';
import '../../css/c/csr_bnwxj.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsEyeglassesNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="og1fybc0v"/><path class="csr_bnwxj"/></g><defs><clipPath id="healthiconsEyeglassesNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:eyeglasses-negative",
	});
}

export default Component;
