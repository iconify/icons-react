import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m_jg-0icb.css';
import '../../css/a/aphxwuktr.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsHomeNegative0)" class="cuyn6tgcc"><path class="m_jg-0icb"/><path clip-rule="evenodd" class="aphxwuktr"/></g><defs><clipPath id="healthiconsHomeNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:home-negative",
	});
}

export default Component;
