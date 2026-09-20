import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyvx3ccox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyvx3ccox"/>`,
		"fallback": "uil:comment-alt-message",
	});
}

export default Component;
