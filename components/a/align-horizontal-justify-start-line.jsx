import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnoyk54yf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnoyk54yf"/>`,
		"fallback": "mingcute:align-horizontal-justify-start-line",
	});
}

export default Component;
