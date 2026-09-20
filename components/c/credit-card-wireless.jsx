import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q46da8bsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q46da8bsg"/>`,
		"fallback": "pixelarticons:credit-card-wireless",
	});
}

export default Component;
