import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6rk79b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h6rk79b1f"/>`,
		"fallback": "streamline-ultimate:analytics-pie-3-bold",
	});
}

export default Component;
