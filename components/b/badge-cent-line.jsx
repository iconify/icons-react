import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6c8e7biz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6c8e7biz"/>`,
		"fallback": "mingcute:badge-cent-line",
	});
}

export default Component;
