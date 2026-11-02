import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wilvaw4bt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wilvaw4bt"/>`,
		"fallback": "mingcute:earth-4-fill",
	});
}

export default Component;
