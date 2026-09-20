import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukyg21zsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ukyg21zsy"/>`,
		"fallback": "mingcute:balance-fill",
	});
}

export default Component;
