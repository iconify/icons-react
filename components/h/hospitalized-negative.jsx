import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x-y8j3bhz.css';
import '../../css/p/pnvm2wb6x.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsHospitalizedNegative0)" class="cuyn6tgcc"><path class="x-y8j3bhz"/><path clip-rule="evenodd" class="pnvm2wb6x"/></g><defs><clipPath id="healthiconsHospitalizedNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:hospitalized-negative",
	});
}

export default Component;
