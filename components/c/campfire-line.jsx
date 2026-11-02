import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk4w6bctl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk4w6bctl"/>`,
		"fallback": "mingcute:campfire-line",
	});
}

export default Component;
