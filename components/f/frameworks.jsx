import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp41u6b8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp41u6b8q"/>`,
		"fallback": "hugeicons:frameworks",
	});
}

export default Component;
