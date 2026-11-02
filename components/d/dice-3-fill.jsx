import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whzzz92ke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whzzz92ke"/>`,
		"fallback": "mingcute:dice-3-fill",
	});
}

export default Component;
