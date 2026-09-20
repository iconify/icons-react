import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptw-w1b1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptw-w1b1h"/>`,
		"fallback": "mage:bookmark-plus-fill",
	});
}

export default Component;
