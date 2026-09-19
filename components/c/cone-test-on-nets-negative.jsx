import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvzia-bph.css';
import '../../css/c/c88x-e94z.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsConeTestOnNetsNegative0)" class="cuyn6tgcc"><path class="kvzia-bph"/><path clip-rule="evenodd" class="c88x-e94z"/></g><defs><clipPath id="healthiconsConeTestOnNetsNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:cone-test-on-nets-negative",
	});
}

export default Component;
