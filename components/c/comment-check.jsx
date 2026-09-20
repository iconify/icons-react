import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpx0ywb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpx0ywb9r"/>`,
		"fallback": "uil:comment-check",
	});
}

export default Component;
