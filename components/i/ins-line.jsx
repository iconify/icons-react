import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izqo2de1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izqo2de1z"/>`,
		"fallback": "mingcute:ins-line",
	});
}

export default Component;
