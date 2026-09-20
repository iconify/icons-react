import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp3c5t_6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp3c5t_6m"/>`,
		"fallback": "mingcute:box-2-line",
	});
}

export default Component;
