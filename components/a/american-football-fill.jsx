import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyv6d8bin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyv6d8bin"/>`,
		"fallback": "mingcute:american-football-fill",
	});
}

export default Component;
