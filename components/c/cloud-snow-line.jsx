import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp1-osbvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp1-osbvp"/>`,
		"fallback": "mingcute:cloud-snow-line",
	});
}

export default Component;
