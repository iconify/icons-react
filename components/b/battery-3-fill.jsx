import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhy-46b0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhy-46b0z"/>`,
		"fallback": "mingcute:battery-3-fill",
	});
}

export default Component;
