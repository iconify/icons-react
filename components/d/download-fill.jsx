import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdxb9k3ah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdxb9k3ah"/>`,
		"fallback": "mingcute:download-fill",
	});
}

export default Component;
