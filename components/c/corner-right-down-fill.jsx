import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-xh4q-md.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-xh4q-md"/>`,
		"fallback": "mingcute:corner-right-down-fill",
	});
}

export default Component;
