import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlh6alb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k xlh6alb2z"/>`,
		"fallback": "withicons:avatar-girl-gloss",
	});
}

export default Component;
