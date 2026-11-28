import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5oob6yvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5oob6yvr"/>`,
		"fallback": "noviair-light:book-search",
	});
}

export default Component;
