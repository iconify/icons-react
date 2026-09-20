import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqj95zb9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqj95zb9l"/>`,
		"fallback": "thesvg-color:contactless-payment",
	});
}

export default Component;
