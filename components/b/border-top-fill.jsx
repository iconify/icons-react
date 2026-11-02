import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/googpof1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="googpof1k"/>`,
		"fallback": "mingcute:border-top-fill",
	});
}

export default Component;
