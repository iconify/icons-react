import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj5nxlerw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj5nxlerw"/>`,
		"fallback": "mingcute:campfire-line",
	});
}

export default Component;
