import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewv6nub2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewv6nub2p"/>`,
		"fallback": "mingcute:border-outer-line",
	});
}

export default Component;
