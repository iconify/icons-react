import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj3-3yb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tj3-3yb6e"/>`,
		"fallback": "mingcute:butterfly-2-fill",
	});
}

export default Component;
