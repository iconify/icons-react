import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr5o16b_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr5o16b_u"/>`,
		"fallback": "noviair-light:basket-plus",
	});
}

export default Component;
