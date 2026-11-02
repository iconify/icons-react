import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5yd7u01h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5yd7u01h"/>`,
		"fallback": "mingcute:forward-2-fill",
	});
}

export default Component;
