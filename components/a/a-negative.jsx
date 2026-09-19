import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w-j95hfmm.css';
import '../../css/y/yhrwsxnxg.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsANegative0)" class="cuyn6tgcc"><path class="w-j95hfmm"/><path clip-rule="evenodd" class="yhrwsxnxg"/></g><defs><clipPath id="healthiconsANegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:a-negative",
	});
}

export default Component;
