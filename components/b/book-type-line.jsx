import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm22a7b1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm22a7b1h"/>`,
		"fallback": "mingcute:book-type-line",
	});
}

export default Component;
