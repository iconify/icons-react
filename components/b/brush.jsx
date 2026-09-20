import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxy_0rb_q.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxy_0rb_q"/>`,
		"fallback": "oi:brush",
	});
}

export default Component;
