import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/itafu2b5y.css';
import '../../css/a/a51d7tbhn.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="itafu2b5y"/><path class="a51d7tbhn"/></g>`,
		"fallback": "pullo:copy-check-duotone",
	});
}

export default Component;
