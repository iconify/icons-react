import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gwcwptb2r.css';
import '../../css/q/qit4vobxl.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsBlisterPillsOvalX16Negative0)" class="cuyn6tgcc"><path class="gwcwptb2r"/><path clip-rule="evenodd" class="qit4vobxl"/></g><defs><clipPath id="healthiconsBlisterPillsOvalX16Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:blister-pills-oval-x16-negative",
	});
}

export default Component;
