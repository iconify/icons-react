import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k-4g9cc_i.css';
import '../../css/i/iyo33it2a.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsBlisterPillsRoundX4Negative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="k-4g9cc_i"/><path class="iyo33it2a"/></g><defs><clipPath id="healthiconsBlisterPillsRoundX4Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:blister-pills-round-x4-negative",
	});
}

export default Component;
