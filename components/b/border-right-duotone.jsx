import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e26--2psv.css';
import '../../css/w/w61g679gl.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e26--2psv"/><path class="w61g679gl"/></g>`,
		"fallback": "pullo:border-right-duotone",
	});
}

export default Component;
