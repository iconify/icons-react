import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xaaiztg2y.css';
import '../../css/b/byn2f-bjt.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsContactLensesNegative0)" class="cuyn6tgcc"><path class="xaaiztg2y"/><path clip-rule="evenodd" class="byn2f-bjt"/></g><defs><clipPath id="healthiconsContactLensesNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:contact-lenses-negative",
	});
}

export default Component;
