import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zw-e76bqu.css';
import '../../css/g/gen1x3bzf.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthicons0Negative0)" class="cuyn6tgcc"><path class="zw-e76bqu"/><path clip-rule="evenodd" class="gen1x3bzf"/></g><defs><clipPath id="healthicons0Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:0-negative",
	});
}

export default Component;
