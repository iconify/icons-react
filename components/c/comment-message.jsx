import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaz6k6b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaz6k6b-i"/>`,
		"fallback": "uil:comment-message",
	});
}

export default Component;
