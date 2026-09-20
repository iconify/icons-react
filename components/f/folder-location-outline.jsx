import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se-3hvqef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se-3hvqef"/>`,
		"fallback": "mdi:folder-location-outline",
	});
}

export default Component;
