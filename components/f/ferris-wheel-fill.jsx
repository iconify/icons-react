import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgz7q7b3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kgz7q7b3e"/>`,
		"fallback": "mingcute:ferris-wheel-fill",
	});
}

export default Component;
