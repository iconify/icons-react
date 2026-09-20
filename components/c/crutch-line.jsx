import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-w0vdb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-w0vdb9h"/>`,
		"fallback": "mingcute:crutch-line",
	});
}

export default Component;
