import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q7q0a78ln.css';
import '../../css/d/dn8_81bnp.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q7q0a78ln"/><path class="dn8_81bnp"/></g>`,
		"fallback": "pullo:dumpster-duotone",
	});
}

export default Component;
