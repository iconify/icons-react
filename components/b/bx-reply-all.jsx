import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iclyhyb7e.css';
import '../../css/j/jnkd4081l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iclyhyb7e"/><path class="jnkd4081l"/>`,
		"fallback": "bx:bx-reply-all",
	});
}

export default Component;
