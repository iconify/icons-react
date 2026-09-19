import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/diaxdjbku.css';
import '../../css/h/hr5ks1ees.css';
import '../../css/i/ic63y1bmo.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsDisinfectingWipesNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="diaxdjbku"/><path class="hr5ks1ees"/><path clip-rule="evenodd" class="ic63y1bmo"/></g><defs><clipPath id="healthiconsDisinfectingWipesNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:disinfecting-wipes-negative",
	});
}

export default Component;
