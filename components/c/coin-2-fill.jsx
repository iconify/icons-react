import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k72n2-yze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k72n2-yze"/>`,
		"fallback": "mingcute:coin-2-fill",
	});
}

export default Component;
