import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnhqg0bcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnhqg0bcq"/>`,
		"fallback": "mingcute:easy-in-out-line",
	});
}

export default Component;
