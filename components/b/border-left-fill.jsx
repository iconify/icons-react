import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0m0jfbvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0m0jfbvb"/>`,
		"fallback": "mingcute:border-left-fill",
	});
}

export default Component;
