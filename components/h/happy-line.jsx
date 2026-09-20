import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqgrmfe8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqgrmfe8s"/>`,
		"fallback": "mingcute:happy-line",
	});
}

export default Component;
