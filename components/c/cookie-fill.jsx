import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-og94iwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-og94iwn"/>`,
		"fallback": "ri:cookie-fill",
	});
}

export default Component;
