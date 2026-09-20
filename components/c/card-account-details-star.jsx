import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtg-17b6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtg-17b6d"/>`,
		"fallback": "mdi:card-account-details-star",
	});
}

export default Component;
