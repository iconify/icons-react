import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp9gux4fj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp9gux4fj"/>`,
		"fallback": "mingcute:bulb-line",
	});
}

export default Component;
