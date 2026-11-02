import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovik-4b0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovik-4b0r"/>`,
		"fallback": "mingcute:bug-off-line",
	});
}

export default Component;
