import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt806nbqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt806nbqu"/>`,
		"fallback": "uil:cloud-moon-meatball",
	});
}

export default Component;
