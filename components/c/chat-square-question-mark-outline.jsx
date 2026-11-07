import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czn8j8ltd.css';
import '../../css/j/jp3kqwdgu.css';
import '../../css/u/um_zvyb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czn8j8ltd"/><path class="jp3kqwdgu"/><path clip-rule="evenodd" class="um_zvyb1k"/>`,
		"fallback": "solar:chat-square-question-mark-outline",
	});
}

export default Component;
