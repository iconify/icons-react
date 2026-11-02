import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wui7vkklb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wui7vkklb"/>`,
		"fallback": "mingcute:align-start-vertical-line",
	});
}

export default Component;
