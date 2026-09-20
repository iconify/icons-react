import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0vm8o8_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0vm8o8_q"/>`,
		"fallback": "ri:fullscreen-fill",
	});
}

export default Component;
