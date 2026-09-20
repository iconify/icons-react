import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i68-4kbdp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i68-4kbdp"/>`,
		"fallback": "selfhst:buy-me-a-coffee-dark",
	});
}

export default Component;
