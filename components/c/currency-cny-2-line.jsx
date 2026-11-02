import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebksf3b3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebksf3b3s"/>`,
		"fallback": "mingcute:currency-cny-2-line",
	});
}

export default Component;
