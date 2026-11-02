import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6a3wwbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6a3wwbht"/>`,
		"fallback": "mingcute:align-horizontal-space-between-fill",
	});
}

export default Component;
