import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m681rhb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m681rhb6o"/>`,
		"fallback": "mingcute:car-window-line",
	});
}

export default Component;
