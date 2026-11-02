import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkrr3nbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkrr3nbwn"/>`,
		"fallback": "mingcute:bulb-ai-fill",
	});
}

export default Component;
