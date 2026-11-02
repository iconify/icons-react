import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vygf5iblq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vygf5iblq"/>`,
		"fallback": "mingcute:ebike-line",
	});
}

export default Component;
