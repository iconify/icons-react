import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/otpiyn0qj.css';
import '../../css/e/emq4-_fxk.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsAlertCircleNegative0)" class="cuyn6tgcc"><path class="otpiyn0qj"/><path clip-rule="evenodd" class="emq4-_fxk"/></g><defs><clipPath id="healthiconsAlertCircleNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:alert-circle-negative",
	});
}

export default Component;
