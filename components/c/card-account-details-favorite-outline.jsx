import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh5ne9_xz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh5ne9_xz"/>`,
		"fallback": "mdi:card-account-details-favorite-outline",
	});
}

export default Component;
