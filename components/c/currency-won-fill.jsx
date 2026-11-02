import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5y4f3bao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5y4f3bao"/>`,
		"fallback": "mingcute:currency-won-fill",
	});
}

export default Component;
