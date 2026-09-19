import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yk7vkkbvp.css';
import '../../css/z/zk0gytqrc.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsCriticalCareNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="yk7vkkbvp"/><path class="zk0gytqrc"/></g><defs><clipPath id="healthiconsCriticalCareNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:critical-care-negative",
	});
}

export default Component;
