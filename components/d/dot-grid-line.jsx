import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wci0isvfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wci0isvfu"/>`,
		"fallback": "mingcute:dot-grid-line",
	});
}

export default Component;
