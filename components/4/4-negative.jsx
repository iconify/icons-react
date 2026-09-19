import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lhv3f5pha.css';
import '../../css/b/bmdsm-j1i.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthicons4Negative0)" class="cuyn6tgcc"><path class="lhv3f5pha"/><path clip-rule="evenodd" class="bmdsm-j1i"/></g><defs><clipPath id="healthicons4Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:4-negative",
	});
}

export default Component;
