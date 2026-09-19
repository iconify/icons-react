import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyj3y8b_q.css';

const viewBox = {"width":1664,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyj3y8b_q"/>`,
		"fallback": "vs:face-dislike",
	});
}

export default Component;
