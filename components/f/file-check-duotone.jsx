import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k2sz1hbbv.css';
import '../../css/w/wc00fkc7c.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k2sz1hbbv"/><path class="wc00fkc7c"/></g>`,
		"fallback": "pullo:file-check-duotone",
	});
}

export default Component;
