import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgmo-zb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgmo-zb5u"/>`,
		"fallback": "bx:coffee-togo",
	});
}

export default Component;
