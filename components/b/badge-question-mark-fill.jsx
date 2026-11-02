import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq8hgf16d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq8hgf16d"/>`,
		"fallback": "mingcute:badge-question-mark-fill",
	});
}

export default Component;
