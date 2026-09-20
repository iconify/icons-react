import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0g7uzbot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0g7uzbot"/>`,
		"fallback": "keyline-icons:circle-pen-sharp",
	});
}

export default Component;
