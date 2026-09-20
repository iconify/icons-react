import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5c9j5b2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5c9j5b2b"/>`,
		"fallback": "mingcute:earth-2-fill",
	});
}

export default Component;
