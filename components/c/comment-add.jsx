import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch6_fcbjy.css';
import '../../css/j/j1kdqfrps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch6_fcbjy"/><path class="j1kdqfrps"/>`,
		"fallback": "bx:comment-add",
	});
}

export default Component;
