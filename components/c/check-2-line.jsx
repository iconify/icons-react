import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdhjrvb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdhjrvb0i"/>`,
		"fallback": "mingcute:check-2-line",
	});
}

export default Component;
