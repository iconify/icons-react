import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o7pd9bbex.css';
import '../../css/h/h0x04acxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o7pd9bbex secondary"/><path class="h0x04acxy primary"/></g>`,
		"fallback": "iconaut:hammer-duotone",
	});
}

export default Component;
