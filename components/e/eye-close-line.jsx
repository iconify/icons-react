import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjmgc7bxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjmgc7bxf"/>`,
		"fallback": "mingcute:eye-close-line",
	});
}

export default Component;
