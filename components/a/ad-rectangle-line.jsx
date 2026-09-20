import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og67t9b1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og67t9b1l"/>`,
		"fallback": "mingcute:ad-rectangle-line",
	});
}

export default Component;
