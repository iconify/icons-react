import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4xb5-tlu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4xb5-tlu"/>`,
		"fallback": "mingcute:copy-3-fill",
	});
}

export default Component;
