import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b475p4q9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b475p4q9k"/>`,
		"fallback": "mingcute:building-5-line",
	});
}

export default Component;
