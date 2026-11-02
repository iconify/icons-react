import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdwzps-0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdwzps-0k"/>`,
		"fallback": "mingcute:faceid-line",
	});
}

export default Component;
