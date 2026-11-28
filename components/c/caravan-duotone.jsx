import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u0qjp_o5b.css';
import '../../css/e/ea4om3bwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary u0qjp_o5b"/><path class="ea4om3bwk primary"/></g>`,
		"fallback": "iconaut:caravan-duotone",
	});
}

export default Component;
