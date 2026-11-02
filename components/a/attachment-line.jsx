import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_x2sib4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_x2sib4h"/>`,
		"fallback": "mingcute:attachment-line",
	});
}

export default Component;
