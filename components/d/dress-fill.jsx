import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6j_1ipvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6j_1ipvo"/>`,
		"fallback": "mingcute:dress-fill",
	});
}

export default Component;
