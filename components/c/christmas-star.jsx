import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziq5wspty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziq5wspty"/>`,
		"fallback": "mdi:christmas-star",
	});
}

export default Component;
