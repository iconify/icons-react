import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lit144j4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lit144j4k"/>`,
		"fallback": "mingcute:align-end-vertical-line",
	});
}

export default Component;
