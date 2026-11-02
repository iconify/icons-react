import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o33txrb4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o33txrb4e"/>`,
		"fallback": "mingcute:arrow-big-right-dash-line",
	});
}

export default Component;
