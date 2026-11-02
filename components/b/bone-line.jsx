import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh-wn-bou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh-wn-bou"/>`,
		"fallback": "mingcute:bone-line",
	});
}

export default Component;
