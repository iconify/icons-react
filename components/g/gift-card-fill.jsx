import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgc4gwb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgc4gwb-w"/>`,
		"fallback": "mingcute:gift-card-fill",
	});
}

export default Component;
