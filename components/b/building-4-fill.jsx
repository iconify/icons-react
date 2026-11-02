import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux3fr-b7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux3fr-b7l"/>`,
		"fallback": "mingcute:building-4-fill",
	});
}

export default Component;
