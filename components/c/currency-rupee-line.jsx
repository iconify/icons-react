import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uclud-n7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uclud-n7w"/>`,
		"fallback": "mingcute:currency-rupee-line",
	});
}

export default Component;
