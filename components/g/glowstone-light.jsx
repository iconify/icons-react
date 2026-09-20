import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucpojwd2q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucpojwd2q"/>`,
		"fallback": "selfhst:glowstone-light",
	});
}

export default Component;
