import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9wyzcc1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9wyzcc1k"/>`,
		"fallback": "octicon:chat-24",
	});
}

export default Component;
