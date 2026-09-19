import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u_wpzfweg.css';
import '../../css/b/b-7hyhlyn.css';
import '../../css/u/uym-bnbal.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsBreastPumpNegative0)" class="cuyn6tgcc"><path class="u_wpzfweg"/><path clip-rule="evenodd" class="b-7hyhlyn"/><path clip-rule="evenodd" class="uym-bnbal"/></g><defs><clipPath id="healthiconsBreastPumpNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:breast-pump-negative",
	});
}

export default Component;
