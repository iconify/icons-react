import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upi7cjb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upi7cjb6y"/>`,
		"fallback": "mingcute:fault-line",
	});
}

export default Component;
