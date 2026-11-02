import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p206_1bsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p206_1bsl"/>`,
		"fallback": "mingcute:father-christmas-fill",
	});
}

export default Component;
