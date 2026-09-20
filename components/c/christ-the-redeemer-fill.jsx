import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qigz4b1gt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qigz4b1gt"/>`,
		"fallback": "mingcute:christ-the-redeemer-fill",
	});
}

export default Component;
