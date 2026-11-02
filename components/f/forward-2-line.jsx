import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym7ac94ej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym7ac94ej"/>`,
		"fallback": "mingcute:forward-2-line",
	});
}

export default Component;
