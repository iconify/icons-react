import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlat7iboy.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlat7iboy"/>`,
		"fallback": "f7:cart-badge-plus",
	});
}

export default Component;
