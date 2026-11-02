import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql2n6wb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql2n6wb7r"/>`,
		"fallback": "mingcute:capricorn-line",
	});
}

export default Component;
