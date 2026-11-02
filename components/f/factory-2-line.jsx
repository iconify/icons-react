import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y71zoee3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y71zoee3k"/>`,
		"fallback": "mingcute:factory-2-line",
	});
}

export default Component;
