import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w15byfb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w15byfb-i"/>`,
		"fallback": "mingcute:border-outer-fill",
	});
}

export default Component;
