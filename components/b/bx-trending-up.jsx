import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqnt5cb4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqnt5cb4o"/>`,
		"fallback": "bx:bx-trending-up",
	});
}

export default Component;
