import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxt-x2bhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxt-x2bhu"/>`,
		"fallback": "bx:bxs-comment-check",
	});
}

export default Component;
