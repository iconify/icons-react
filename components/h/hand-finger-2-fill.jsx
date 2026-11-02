import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea0-w_xym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea0-w_xym"/>`,
		"fallback": "mingcute:hand-finger-2-fill",
	});
}

export default Component;
