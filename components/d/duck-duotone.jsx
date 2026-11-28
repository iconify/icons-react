import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yjh5opeas.css';
import '../../css/g/g_ccs60cj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary yjh5opeas"/><path class="g_ccs60cj primary"/></g>`,
		"fallback": "iconaut:duck-duotone",
	});
}

export default Component;
