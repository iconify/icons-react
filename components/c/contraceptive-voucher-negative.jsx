import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bjaq42dys.css';
import '../../css/w/wsan428kp.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsContraceptiveVoucherNegative0)" clip-rule="evenodd" class="n1lsf0bnc"><path class="bjaq42dys"/><path class="wsan428kp"/></g><defs><clipPath id="healthiconsContraceptiveVoucherNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:contraceptive-voucher-negative",
	});
}

export default Component;
