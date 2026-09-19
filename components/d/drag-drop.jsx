import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syg8jbb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syg8jbb6q"/>`,
		"fallback": "hugeicons:drag-drop",
	});
}

export default Component;
