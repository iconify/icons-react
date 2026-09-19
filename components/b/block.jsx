import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h0ao3e86m.css';
import '../../css/n/ni1juwi3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h0ao3e86m"/><path clip-rule="evenodd" class="ni1juwi3n"/></g>`,
		"fallback": "gg:block",
	});
}

export default Component;
