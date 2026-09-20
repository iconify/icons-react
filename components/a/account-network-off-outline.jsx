import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih6-fu92y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih6-fu92y"/>`,
		"fallback": "mdi:account-network-off-outline",
	});
}

export default Component;
