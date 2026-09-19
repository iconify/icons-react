import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gm0tef8vw.css';
import '../../css/f/ff15xgbwv.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsElectricityNegative0)" class="cuyn6tgcc"><path class="gm0tef8vw"/><path clip-rule="evenodd" class="ff15xgbwv"/></g><defs><clipPath id="healthiconsElectricityNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:electricity-negative",
	});
}

export default Component;
