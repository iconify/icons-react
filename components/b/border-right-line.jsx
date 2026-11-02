import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9jm6rlxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9jm6rlxn"/>`,
		"fallback": "mingcute:border-right-line",
	});
}

export default Component;
