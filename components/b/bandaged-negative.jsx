import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b77nccuaw.css';
import '../../css/n/nrv454b9r.css';
import '../../css/k/kcwct_bxu.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsBandagedNegative0)" class="cuyn6tgcc"><path clip-rule="evenodd" class="b77nccuaw"/><path class="nrv454b9r"/><path clip-rule="evenodd" class="kcwct_bxu"/></g><defs><clipPath id="healthiconsBandagedNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:bandaged-negative",
	});
}

export default Component;
