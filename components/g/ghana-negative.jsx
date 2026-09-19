import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/apcm2vbzy.css';
import '../../css/c/cef5119xb.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsGhanaNegative0)" class="cuyn6tgcc"><path class="apcm2vbzy"/><path clip-rule="evenodd" class="cef5119xb"/></g><defs><clipPath id="healthiconsGhanaNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:ghana-negative",
	});
}

export default Component;
