import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8i23yb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8i23yb5u"/>`,
		"fallback": "noviair-light:burger-heart",
	});
}

export default Component;
