import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb_ogzbcc.css';

const viewBox = {"width":1026,"height":1027};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb_ogzbcc"/>`,
		"fallback": "whh:alertpay",
	});
}

export default Component;
