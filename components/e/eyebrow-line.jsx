import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myyz2sbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myyz2sbit"/>`,
		"fallback": "mingcute:eyebrow-line",
	});
}

export default Component;
