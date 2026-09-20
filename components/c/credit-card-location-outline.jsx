import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1y9ezbgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1y9ezbgg"/>`,
		"fallback": "mdi:credit-card-location-outline",
	});
}

export default Component;
