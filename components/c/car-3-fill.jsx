import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqsf3pbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqsf3pbmc"/>`,
		"fallback": "mingcute:car-3-fill",
	});
}

export default Component;
