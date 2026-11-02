import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwooc4-dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwooc4-dq"/>`,
		"fallback": "mingcute:heartbeat-2-line",
	});
}

export default Component;
