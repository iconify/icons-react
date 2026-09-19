import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pogpn0byu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pogpn0byu"/>`,
		"fallback": "fa7-brands:flutter",
	});
}

export default Component;
