import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iuonsfbmk.css';
import '../../css/q/qgaeuqbmr.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsFootNegative0)" class="cuyn6tgcc"><path class="iuonsfbmk"/><path clip-rule="evenodd" class="qgaeuqbmr"/></g><defs><clipPath id="healthiconsFootNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:foot-negative",
	});
}

export default Component;
