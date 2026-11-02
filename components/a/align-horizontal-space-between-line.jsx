import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp5j5mbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp5j5mbyk"/>`,
		"fallback": "mingcute:align-horizontal-space-between-line",
	});
}

export default Component;
