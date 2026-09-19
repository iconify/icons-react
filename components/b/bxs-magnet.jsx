import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi2b8lbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi2b8lbvc"/>`,
		"fallback": "bx:bxs-magnet",
	});
}

export default Component;
