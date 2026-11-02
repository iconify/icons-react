import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqqss1byd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqqss1byd"/>`,
		"fallback": "mingcute:ban-line",
	});
}

export default Component;
