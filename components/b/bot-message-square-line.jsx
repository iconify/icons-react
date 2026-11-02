import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkkzhdc1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkkzhdc1k"/>`,
		"fallback": "mingcute:bot-message-square-line",
	});
}

export default Component;
