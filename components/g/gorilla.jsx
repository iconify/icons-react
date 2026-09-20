import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw0i9f9gy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw0i9f9gy"/>`,
		"fallback": "streamline-cyber:gorilla",
	});
}

export default Component;
