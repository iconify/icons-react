import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvz8k-fun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvz8k-fun"/>`,
		"fallback": "mingcute:front-windshield-defroster-fill",
	});
}

export default Component;
