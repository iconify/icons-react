import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgu54ybmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgu54ybmq"/>`,
		"fallback": "mingcute:egg-off-fill",
	});
}

export default Component;
