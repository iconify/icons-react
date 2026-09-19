import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h9t97e2dy.css';
import '../../css/p/p7m4o0kko.css';

const viewBox = {"width":24,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h9t97e2dy"/><path class="p7m4o0kko"/></g>`,
		"fallback": "et:document",
	});
}

export default Component;
