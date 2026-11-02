import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bppp0b1tb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bppp0b1tb"/>`,
		"fallback": "mingcute:clock-7-fill",
	});
}

export default Component;
