import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd8w5db4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd8w5db4f"/>`,
		"fallback": "coolicons:dumbbell-round",
	});
}

export default Component;
