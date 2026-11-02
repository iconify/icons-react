import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk-q_ac3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk-q_ac3e"/>`,
		"fallback": "mingcute:greatwall-line",
	});
}

export default Component;
