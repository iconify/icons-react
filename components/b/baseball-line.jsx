import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1qi6g_cq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1qi6g_cq"/>`,
		"fallback": "mingcute:baseball-line",
	});
}

export default Component;
