import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1q3--b_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1q3--b_q"/>`,
		"fallback": "selfhst:amazon-prime-light",
	});
}

export default Component;
