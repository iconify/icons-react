import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdj4t8jqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdj4t8jqe"/>`,
		"fallback": "hugeicons:call",
	});
}

export default Component;
