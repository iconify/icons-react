import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la4yf5w1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la4yf5w1y"/>`,
		"fallback": "feather:download",
	});
}

export default Component;
