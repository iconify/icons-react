import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0v9n30ky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0v9n30ky"/>`,
		"fallback": "mingcute:glove-fill",
	});
}

export default Component;
