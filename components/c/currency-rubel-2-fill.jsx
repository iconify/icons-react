import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g99h9zyby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g99h9zyby"/>`,
		"fallback": "mingcute:currency-rubel-2-fill",
	});
}

export default Component;
