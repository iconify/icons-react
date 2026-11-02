import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im5_q7b6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im5_q7b6p"/>`,
		"fallback": "mingcute:hail-fill",
	});
}

export default Component;
