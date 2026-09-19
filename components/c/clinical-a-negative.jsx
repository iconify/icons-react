import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/viejr6bat.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsClinicalANegative0)"><path clip-rule="evenodd" class="viejr6bat"/></g><defs><clipPath id="healthiconsClinicalANegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:clinical-a-negative",
	});
}

export default Component;
