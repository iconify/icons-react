import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce6ad26an.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce6ad26an"/>`,
		"fallback": "mdi:ink-minus",
	});
}

export default Component;
