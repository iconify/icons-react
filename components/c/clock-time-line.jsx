import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdv6n5bpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdv6n5bpq"/>`,
		"fallback": "mingcute:clock-time-line",
	});
}

export default Component;
