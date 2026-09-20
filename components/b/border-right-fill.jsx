import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssgx6jbou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssgx6jbou"/>`,
		"fallback": "mingcute:border-right-fill",
	});
}

export default Component;
