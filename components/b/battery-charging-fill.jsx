import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-tb6tb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-tb6tb0o"/>`,
		"fallback": "mingcute:battery-charging-fill",
	});
}

export default Component;
