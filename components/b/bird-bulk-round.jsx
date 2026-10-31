import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kq6m4bb6b.css';
import '../../css/q/qkielsllu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kq6m4bb6b"/><path class="qkielsllu"/></g>`,
		"fallback": "coolicons:bird-bulk-round",
	});
}

export default Component;
