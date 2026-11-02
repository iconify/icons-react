import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aaa8r9bun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aaa8r9bun"/>`,
		"fallback": "mingcute:heading-3-fill",
	});
}

export default Component;
