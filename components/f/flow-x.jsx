import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bepp79b9p.css';
import '../../css/k/kd68bznoy.css';
import '../../css/g/gtrbizr6q.css';
import '../../css/y/ykpcqlinx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bepp79b9p"/><path class="kd68bznoy"/><circle class="gtrbizr6q"/><path class="ykpcqlinx"/></g>`,
		"fallback": "andrsrxn:flow-x",
	});
}

export default Component;
