import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fxnrcmbcl.css';
import '../../css/l/ll4ui7hzo.css';
import '../../css/c/caxhh42oz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fxnrcmbcl"/><path clip-rule="evenodd" class="ll4ui7hzo"/><path class="caxhh42oz"/></g>`,
		"fallback": "healthicons:drop-medicine",
	});
}

export default Component;
