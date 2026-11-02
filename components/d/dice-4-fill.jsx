import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixk8e1a3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixk8e1a3i"/>`,
		"fallback": "mingcute:dice-4-fill",
	});
}

export default Component;
