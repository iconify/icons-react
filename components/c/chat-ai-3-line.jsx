import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slhog6bjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slhog6bjb"/>`,
		"fallback": "ri:chat-ai-3-line",
	});
}

export default Component;
