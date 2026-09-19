import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri6cgf8wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri6cgf8wi"/>`,
		"fallback": "bx:bx-tab",
	});
}

export default Component;
