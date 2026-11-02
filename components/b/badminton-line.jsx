import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4-38zb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4-38zb6r"/>`,
		"fallback": "mingcute:badminton-line",
	});
}

export default Component;
