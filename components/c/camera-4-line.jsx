import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d39d0omtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d39d0omtr"/>`,
		"fallback": "ri:camera-4-line",
	});
}

export default Component;
