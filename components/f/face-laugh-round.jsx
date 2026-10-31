import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx89wlhpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx89wlhpt"/>`,
		"fallback": "coolicons:face-laugh-round",
	});
}

export default Component;
