import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f56kbab9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f56kbab9o"/>`,
		"fallback": "mynaui:five-hexagon-solid",
	});
}

export default Component;
