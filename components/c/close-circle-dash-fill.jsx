import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w739r15xw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w739r15xw"/>`,
		"fallback": "mingcute:close-circle-dash-fill",
	});
}

export default Component;
