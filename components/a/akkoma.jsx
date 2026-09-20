import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc5trhbqj.css';
import '../../css/p/p6ca8ub5u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc5trhbqj"/><path class="p6ca8ub5u"/>`,
		"fallback": "selfhst:akkoma",
	});
}

export default Component;
