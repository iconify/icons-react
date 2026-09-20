import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo98b5gqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo98b5gqd"/>`,
		"fallback": "mingcute:arrows-left-line",
	});
}

export default Component;
