import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxwu5qbal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxwu5qbal"/>`,
		"fallback": "mingcute:edit-5-fill",
	});
}

export default Component;
