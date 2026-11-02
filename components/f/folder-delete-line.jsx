import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxxuu8u_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxxuu8u_q"/>`,
		"fallback": "mingcute:folder-delete-line",
	});
}

export default Component;
