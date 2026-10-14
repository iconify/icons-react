import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/u/u6cy43dlg.css';
import '../../css/e/e8c3lx6za.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="u6cy43dlg"/><path class="e8c3lx6za"/></g>`,
		"fallback": "matita:ban",
	});
}

export default Component;
