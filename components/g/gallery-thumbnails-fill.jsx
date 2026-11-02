import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q46im1cui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q46im1cui"/>`,
		"fallback": "mingcute:gallery-thumbnails-fill",
	});
}

export default Component;
