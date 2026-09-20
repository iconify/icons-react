import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orce8znyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orce8znyw"/>`,
		"fallback": "mingcute:anniversary-fill",
	});
}

export default Component;
