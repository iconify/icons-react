import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuy8ujbot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuy8ujbot"/>`,
		"fallback": "mingcute:cloud-alert-line",
	});
}

export default Component;
