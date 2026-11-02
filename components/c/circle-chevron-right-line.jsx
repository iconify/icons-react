import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr4tq0brk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr4tq0brk"/>`,
		"fallback": "mingcute:circle-chevron-right-line",
	});
}

export default Component;
