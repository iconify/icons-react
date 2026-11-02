import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyu5i9bcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyu5i9bcz"/>`,
		"fallback": "mingcute:bill-line",
	});
}

export default Component;
