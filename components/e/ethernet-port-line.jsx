import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie46jk5tc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie46jk5tc"/>`,
		"fallback": "mingcute:ethernet-port-line",
	});
}

export default Component;
