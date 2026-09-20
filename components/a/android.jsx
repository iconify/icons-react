import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_a9fclgc.css';
import '../../css/b/blj5kcbsm.css';

const viewBox = {"width":256,"height":150};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_a9fclgc"/><path class="blj5kcbsm"/>`,
		"fallback": "thesvg-color:android",
	});
}

export default Component;
