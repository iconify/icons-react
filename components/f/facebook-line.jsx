import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmc74g-ck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmc74g-ck"/>`,
		"fallback": "mingcute:facebook-line",
	});
}

export default Component;
