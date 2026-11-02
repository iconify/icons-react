import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8i-qwj9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8i-qwj9j"/>`,
		"fallback": "mingcute:empty-box-line",
	});
}

export default Component;
