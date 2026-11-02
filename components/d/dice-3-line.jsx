import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lanexpb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lanexpb5z"/>`,
		"fallback": "mingcute:dice-3-line",
	});
}

export default Component;
