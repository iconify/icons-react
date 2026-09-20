import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn04et98e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn04et98e"/>`,
		"fallback": "mdi:favorite-shooting",
	});
}

export default Component;
