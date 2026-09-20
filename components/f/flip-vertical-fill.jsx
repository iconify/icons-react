import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm5nsnb0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm5nsnb0h"/>`,
		"fallback": "ri:flip-vertical-fill",
	});
}

export default Component;
