import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vrose7bun.css';
import '../../css/y/ylm613c1k.css';
import '../../css/a/a-h5a2b9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vrose7bun"/><path class="ylm613c1k"/><path class="a-h5a2b9l"/></g>`,
		"fallback": "majesticons:contact-line",
	});
}

export default Component;
