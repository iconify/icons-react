import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7x8wjxyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7x8wjxyv"/>`,
		"fallback": "mingcute:earth-line",
	});
}

export default Component;
