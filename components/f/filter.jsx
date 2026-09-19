import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2wmryb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2wmryb4s"/>`,
		"fallback": "hugeicons:filter",
	});
}

export default Component;
