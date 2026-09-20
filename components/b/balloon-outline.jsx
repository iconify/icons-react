import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tgq371b5b.css';
import '../../css/i/iupy2d3vb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tgq371b5b"/><path clip-rule="evenodd" class="iupy2d3vb"/></g>`,
		"fallback": "solar:balloon-outline",
	});
}

export default Component;
