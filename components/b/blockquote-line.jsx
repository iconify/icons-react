import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6fn8xqie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6fn8xqie"/>`,
		"fallback": "mingcute:blockquote-line",
	});
}

export default Component;
