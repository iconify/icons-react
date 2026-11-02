import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvitscc-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvitscc-u"/>`,
		"fallback": "mingcute:anticlockwise-alt-line",
	});
}

export default Component;
