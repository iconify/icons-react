import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iulellqle.css';
import '../../css/c/cmx0e-16e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iulellqle secondary"/><path class="cmx0e-16e primary"/></g>`,
		"fallback": "iconaut:border-bottom-duotone",
	});
}

export default Component;
