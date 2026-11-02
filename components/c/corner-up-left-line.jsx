import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7-yjp58x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7-yjp58x"/>`,
		"fallback": "mingcute:corner-up-left-line",
	});
}

export default Component;
