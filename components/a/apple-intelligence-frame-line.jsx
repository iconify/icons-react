import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmq_8zrle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmq_8zrle"/>`,
		"fallback": "mingcute:apple-intelligence-frame-line",
	});
}

export default Component;
