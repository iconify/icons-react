import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_jvi5bkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_jvi5bkb"/>`,
		"fallback": "mdi:database-location-outline",
	});
}

export default Component;
