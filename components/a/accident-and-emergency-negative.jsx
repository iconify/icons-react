import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2573vb8k.css';
import '../../css/d/dxjkcj2hc.css';
import '../../css/p/pxi3puayf.css';
import '../../css/m/mpg06dbtz.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsAccidentAndEmergencyNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="n2573vb8k"/><path clip-rule="evenodd" class="dxjkcj2hc"/><path clip-rule="evenodd" class="pxi3puayf"/><path class="mpg06dbtz"/></g><defs><clipPath id="healthiconsAccidentAndEmergencyNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:accident-and-emergency-negative",
	});
}

export default Component;
