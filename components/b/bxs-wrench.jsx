import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2tht3b8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2tht3b8s"/>`,
		"fallback": "bx:bxs-wrench",
	});
}

export default Component;
