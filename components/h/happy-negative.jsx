import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sm_f0rb5o.css';
import '../../css/q/qa6uieb3t.css';
import '../../css/n/ngfx-vbzr.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsHappyNegative0)" class="cuyn6tgcc"><path class="sm_f0rb5o"/><path clip-rule="evenodd" class="qa6uieb3t"/><path clip-rule="evenodd" class="ngfx-vbzr"/></g><defs><clipPath id="healthiconsHappyNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:happy-negative",
	});
}

export default Component;
