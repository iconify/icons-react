import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o0w-96h3b.css';
import '../../css/t/tcfv6fb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o0w-96h3b secondary"/><path class="primary tcfv6fb4y"/></g>`,
		"fallback": "iconaut:high-speed-train-duotone",
	});
}

export default Component;
