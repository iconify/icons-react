import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubzqx4l4f.css';
import '../../css/d/dfj0wcpcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubzqx4l4f"/><path class="dfj0wcpcx"/>`,
		"fallback": "mingcute:chart-pie-3-line",
	});
}

export default Component;
