import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xf9n0sgyw.css';
import '../../css/i/ibwpnye2s.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsHearingAidNegative0)" class="cuyn6tgcc"><path class="xf9n0sgyw"/><path clip-rule="evenodd" class="ibwpnye2s"/></g><defs><clipPath id="healthiconsHearingAidNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:hearing-aid-negative",
	});
}

export default Component;
