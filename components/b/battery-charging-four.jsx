import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti1ys_bcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti1ys_bcu"/>`,
		"fallback": "mynaui:battery-charging-four",
	});
}

export default Component;
