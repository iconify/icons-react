import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsjrmzbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsjrmzbap"/>`,
		"fallback": "mdi:fridge-variant-outline",
	});
}

export default Component;
