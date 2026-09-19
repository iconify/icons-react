import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6_y8j3lm.css';

const viewBox = {"width":344,"height":464};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6_y8j3lm"/>`,
		"fallback": "zmdi:directions-run",
	});
}

export default Component;
