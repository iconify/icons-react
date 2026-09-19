import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewi53ukxm.css';

const viewBox = {"width":512,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewi53ukxm"/>`,
		"fallback": "ps:do-not-iron",
	});
}

export default Component;
