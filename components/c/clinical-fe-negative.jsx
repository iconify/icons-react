import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j_avwobap.css';
import '../../css/b/b-_xb4s-z.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsClinicalFeNegative0)" class="cuyn6tgcc"><path class="j_avwobap"/><path clip-rule="evenodd" class="b-_xb4s-z"/></g><defs><clipPath id="healthiconsClinicalFeNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:clinical-fe-negative",
	});
}

export default Component;
