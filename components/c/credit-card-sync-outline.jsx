import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbb0gcc7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbb0gcc7i"/>`,
		"fallback": "mdi:credit-card-sync-outline",
	});
}

export default Component;
