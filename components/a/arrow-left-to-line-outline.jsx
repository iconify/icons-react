import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/trl8bceik.css';
import '../../css/r/rtqu-u42p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="trl8bceik"/><path class="rtqu-u42p"/></g>`,
		"fallback": "solar:arrow-left-to-line-outline",
	});
}

export default Component;
