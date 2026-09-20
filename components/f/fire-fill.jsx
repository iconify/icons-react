import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccx82wv1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccx82wv1h"/>`,
		"fallback": "mingcute:fire-fill",
	});
}

export default Component;
