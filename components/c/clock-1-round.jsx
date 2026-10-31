import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3t8qpbvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3t8qpbvh"/>`,
		"fallback": "coolicons:clock-1-round",
	});
}

export default Component;
