import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp9f2qa0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp9f2qa0s"/>`,
		"fallback": "mingcute:exit-line",
	});
}

export default Component;
