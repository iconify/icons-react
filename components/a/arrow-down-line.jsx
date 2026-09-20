import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df2g-2x7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df2g-2x7h"/>`,
		"fallback": "mingcute:arrow-down-line",
	});
}

export default Component;
