import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7u_rtz6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7u_rtz6y"/>`,
		"fallback": "mingcute:aries-line",
	});
}

export default Component;
