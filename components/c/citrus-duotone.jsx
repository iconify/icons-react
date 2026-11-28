import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f55plubgh.css';
import '../../css/i/ixh-0db4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f55plubgh secondary"/><path class="ixh-0db4z primary"/></g>`,
		"fallback": "iconaut:citrus-duotone",
	});
}

export default Component;
