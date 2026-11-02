import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4li52eld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4li52eld"/>`,
		"fallback": "mingcute:chart-bar-stacked-line",
	});
}

export default Component;
