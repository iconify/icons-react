import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fuy0zyboz.css';
import '../../css/d/dyzl-zbur.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthicons4x4Negative0)" class="cuyn6tgcc"><path class="fuy0zyboz"/><path clip-rule="evenodd" class="dyzl-zbur"/></g><defs><clipPath id="healthicons4x4Negative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:4x4-negative",
	});
}

export default Component;
