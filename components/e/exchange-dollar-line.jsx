import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xguulv5uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xguulv5uq"/>`,
		"fallback": "mingcute:exchange-dollar-line",
	});
}

export default Component;
