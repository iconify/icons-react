import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii1xarbkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii1xarbkc"/>`,
		"fallback": "mingcute:book-4-fill",
	});
}

export default Component;
