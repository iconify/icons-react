import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9_rs5b8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9_rs5b8l"/>`,
		"fallback": "mingcute:factory-fill",
	});
}

export default Component;
