import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5gg4sb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5gg4sb7q"/>`,
		"fallback": "mingcute:align-end-vertical-fill",
	});
}

export default Component;
