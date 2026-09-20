import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znnub8yeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znnub8yeh"/>`,
		"fallback": "mdi:account-secure",
	});
}

export default Component;
