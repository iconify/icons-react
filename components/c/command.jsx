import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azn5tbz7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azn5tbz7e"/>`,
		"fallback": "hugeicons:command",
	});
}

export default Component;
