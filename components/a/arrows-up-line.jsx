import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5b26_6ac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5b26_6ac"/>`,
		"fallback": "mingcute:arrows-up-line",
	});
}

export default Component;
