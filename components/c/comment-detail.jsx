import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irjsvsbnf.css';
import '../../css/j/j1kdqfrps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irjsvsbnf"/><path class="j1kdqfrps"/>`,
		"fallback": "bx:comment-detail",
	});
}

export default Component;
