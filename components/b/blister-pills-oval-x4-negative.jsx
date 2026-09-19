import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k-4g9cc_i.css';
import '../../css/x/x_a58ccsg.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsBlisterPillsOvalX4Negative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="k-4g9cc_i"/><path class="x_a58ccsg"/></g><defs><clipPath id="healthiconsBlisterPillsOvalX4Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:blister-pills-oval-x4-negative",
	});
}

export default Component;
