import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td4k7im4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td4k7im4b"/>`,
		"fallback": "mingcute:bookmark-x-fill",
	});
}

export default Component;
