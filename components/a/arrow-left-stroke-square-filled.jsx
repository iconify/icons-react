import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usqlzhh8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usqlzhh8j"/>`,
		"fallback": "boxicons:arrow-left-stroke-square-filled",
	});
}

export default Component;
