import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t6v2fnbsv.css';
import '../../css/w/wll8irj0t.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthicons6Negative0)" class="cuyn6tgcc"><path class="t6v2fnbsv"/><path clip-rule="evenodd" class="wll8irj0t"/></g><defs><clipPath id="healthicons6Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:6-negative",
	});
}

export default Component;
