import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiee1zb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiee1zb6v"/>`,
		"fallback": "ri:chat-check-line",
	});
}

export default Component;
