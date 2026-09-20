import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbn26714g.css';
import '../../css/u/u_kdwj32h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbn26714g"/><path class="u_kdwj32h"/>`,
		"fallback": "mingcute:fast-rewind-line",
	});
}

export default Component;
