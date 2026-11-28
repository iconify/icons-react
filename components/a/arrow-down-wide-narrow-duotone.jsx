import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hqum-fl_o.css';
import '../../css/z/z0v0fnsug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hqum-fl_o secondary"/><path class="primary z0v0fnsug"/></g>`,
		"fallback": "iconaut:arrow-down-wide-narrow-duotone",
	});
}

export default Component;
