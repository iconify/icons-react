import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hec03xb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hec03xb1h"/>`,
		"fallback": "mingcute:hands-clapping-line",
	});
}

export default Component;
