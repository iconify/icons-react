import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj8mcob3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj8mcob3p"/>`,
		"fallback": "keyline-icons:bluetooth-sharp",
	});
}

export default Component;
