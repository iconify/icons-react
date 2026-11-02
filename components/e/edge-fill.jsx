import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_ao6nfns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_ao6nfns"/>`,
		"fallback": "mingcute:edge-fill",
	});
}

export default Component;
