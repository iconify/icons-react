import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/og221kbbq.css';
import '../../css/k/kix828xle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="og221kbbq secondary"/><path class="kix828xle primary"/></g>`,
		"fallback": "iconaut:ai-write-duotone",
	});
}

export default Component;
