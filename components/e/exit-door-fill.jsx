import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an5t5je8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an5t5je8r"/>`,
		"fallback": "mingcute:exit-door-fill",
	});
}

export default Component;
