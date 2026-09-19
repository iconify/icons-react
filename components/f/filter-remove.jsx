import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kikva3tqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kikva3tqj"/>`,
		"fallback": "hugeicons:filter-remove",
	});
}

export default Component;
