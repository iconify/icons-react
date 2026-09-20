import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evhja831n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evhja831n"/>`,
		"fallback": "mingcute:chart-bar-2-line",
	});
}

export default Component;
