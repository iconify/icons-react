import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ittzntb7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ittzntb7e"/>`,
		"fallback": "mingcute:arrow-down-narrow-wide-line",
	});
}

export default Component;
